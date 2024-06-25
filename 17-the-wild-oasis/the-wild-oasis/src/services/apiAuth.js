import supabase from "./supabase";

export async function login({ email, password }) {
  // const { data, error } = await supabase.auth.signInWithPassword({
  //   email: import.meta.env.VITE_USERNAME_EMAIL,
  //   password: import.meta.env.VITE_USERNAME_PASSWORD,
  // });
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  console.log(data);
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, err } = await supabase.auth.getUser();

  if (err) throw new Error(err.message);

  console.log(data);
  return data?.user;
}
