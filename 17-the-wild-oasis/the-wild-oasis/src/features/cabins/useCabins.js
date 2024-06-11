import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"], // Uniquely identify the query
    queryFn: getCabins, // function for querying, must return a promise
  });
  return { isLoading, cabins, error };
}
