"use server";

import { signIn } from "@/app/_lib/auth";

// server actions

export async function signInAction() {
  await signIn("github", { redirectTo: "/account" });
}
