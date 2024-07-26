"use server";

import { signIn, signOut } from "@/app/_lib/auth";

// server actions

export async function signInAction() {
  await signIn("github", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
