"use server";
// server actions

import { auth, signIn, signOut } from "@/app/_lib/auth";
import { supabase } from "@/app/_lib/supabase";

const VALIDNATIONALIDREGEX = /^[a-zA-Z0-9]{6,12}$/;

export async function signInAction() {
  await signIn("github", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!VALIDNATIONALIDREGEX.test(nationalID)) {
    throw new Error("Please provide a valid nationalID");
  }

  const updatedData = { nationality, countryFlag, nationalID };

  const { error } = await supabase
    .from("guests")
    .update(updatedData)
    .eq("id", session.user.guestId);

  if (error) {
    throw new Error("Guest could not be updated");
  }
}
