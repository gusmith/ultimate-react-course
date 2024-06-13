import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

export function useBookings() {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings"], // Uniquely identify the query
    queryFn: getBookings, // function for querying, must return a promise
  });
  return { isLoading, bookings, error };
}
