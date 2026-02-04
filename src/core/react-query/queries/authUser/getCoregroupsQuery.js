import { useQuery } from "@tanstack/react-query";
import httpService from "@core-services/httpService";

export const useGetCoregroupsQuery = () => {
  return useQuery({
    queryKey: ["coregroups"],
    queryFn: async () => {
      const response = await httpService.makeRequest(
        "get",
        `${process.env.EXPO_PUBLIC_API_URL}coregroups/`,
      );
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    retry: 3, // Retry up to 3 times on failure
  });
};
