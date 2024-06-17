import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId], // Uniquely identify the query
    queryFn: () => getBooking(bookingId), // function for querying, must return a promise
    retry: false,
  });
  return { isLoading, booking, error };
}
