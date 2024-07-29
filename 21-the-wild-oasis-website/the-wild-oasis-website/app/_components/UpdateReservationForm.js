import { editReservation } from "@/app/_lib/actions";
import SubmitButton from "@/app/_components/SubmitButton";

export default function UpdateReservationForm({ maxCapacity, booking }) {
  const { numGuests, observations } = booking;
  return (
    <form
      action={editReservation}
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <label htmlFor="numGuests">How many guests?</label>
        <select
          name="numGuests"
          id="numGuests"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          required
          defaultValue={numGuests}
        >
          <option value="" key="">
            Select number of guests...
          </option>
          {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
            <option value={x} key={x}>
              {x} {x === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="observations">
          Anything we should know about your stay?
        </label>
        <textarea
          name="observations"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultValue={observations}
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <SubmitButton pendingLabel="Updating...">
          Update reservation
        </SubmitButton>
      </div>
      <input type="hidden" name="bookingId" value={booking.id} />
    </form>
  );
}
