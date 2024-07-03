import { customAxios } from "@/services/axios";
import { QUERY_KEYS } from "@/utils/constants";
import { Products } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

function useFetchProducts(
  supplier: string,
  search?: string,
  first?: number,
  last?: number,
) {
  const { data, isError, error, isPending } = useQuery({
    queryKey: [...QUERY_KEYS.PRODUCTS, supplier, search],
    queryFn: async (): Promise<Products> => {
      const response = await customAxios.get("/products/public/catalog", {
        params: {
          supplier,
          first: first ?? 0,
          last: last ?? 20,
          search,
        },
      });
      return response.data;
    },
  });

  return { products: data, isPending, isError, error };
}

export { useFetchProducts };
