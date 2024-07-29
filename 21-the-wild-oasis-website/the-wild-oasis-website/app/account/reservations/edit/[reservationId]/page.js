import UpdateReservationForm from "@/app/_components/UpdateReservationForm";
import { auth } from "@/app/_lib/auth";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const session = await auth();

  const reservationId = params.reservationId;
  const booking = await getBooking(reservationId);

  if (booking.guestId !== session.user.guestId) {
    throw new Error("You are not allowed to see this reservation");
  }

  const cabin = await getCabin(booking.cabinId);
  const { maxCapacity } = cabin;

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{reservationId}
      </h2>
      <UpdateReservationForm maxCapacity={maxCapacity} booking={booking} />
    </div>
  );
}
