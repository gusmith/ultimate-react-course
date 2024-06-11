import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded.");
  }

  return data;
}

export async function createUpdateCabin(newCabin, id) {
  console.log(newCabin.image);
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = newCabin.image?.name
    ? `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "")
    : "";
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  console.log(newCabin);
  console.log(id);
  // 1. Create/update cabin
  let query = supabase.from("cabins");

  if (!id) {
    // A. CREATE
    query = query.insert([{ ...newCabin, image: imagePath }]);
  } else {
    // B. UPDATE
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  }

  const { data, error } = await query.select().single();
  console.log(data);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created or edited.");
  }

  // If there is already an image, no need to upload, so early return
  if (hasImagePath) return data;

  // 2. Upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3. Delete the cabin if there was an error uploading the image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created."
    );
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted.");
  }
  return data;
}
