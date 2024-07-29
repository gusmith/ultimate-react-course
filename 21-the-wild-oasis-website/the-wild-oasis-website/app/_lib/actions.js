"use server";
// server actions

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { auth, signIn, signOut } from "@/app/_lib/auth";
import { supabase } from "@/app/_lib/supabase";
import { getBooking, getBookings } from "@/app/_lib/data-service";
import { isPast } from "date-fns";

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

  revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId)) {
    throw new Error("You are not allowed to delete this booking");
  }

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    throw new Error("Booking could not be deleted");
  }
  revalidatePath("/account/reservations");
}

export async function editReservation(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const numGuests = Number(formData.get("numGuests"));
  const observations = formData.get("observations").slice(0, 1000);
  const bookingId = Number(formData.get("bookingId"));

  // Assert that the booking is owned by the current user
  const booking = await getBooking(bookingId);
  if (booking.guestId !== session.user.guestId) {
    throw new Error("You are not allowed to edit this booking");
  }

  // Assert that the booking is not in the past
  if (isPast(booking.startDate)) {
    throw new Error("You can't edit a booking that has already started");
  }

  const updatedFields = {
    numGuests,
    observations,
  };

  const { error } = await supabase
    .from("bookings")
    .update(updatedFields)
    .eq("id", bookingId);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  revalidatePath("/account/reservations");
  revalidatePath(`/account/reservations/edit/${bookingId}`);
  redirect("/account/reservations");
}
