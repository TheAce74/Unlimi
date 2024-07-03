import { useAppContext } from "@/context/AppContext";
import { useFetchProducts } from "@/hooks/useFetchProducts";
import { useToast } from "@/hooks/useToast";
import { getErrorMessage } from "@/utils/functions";
import { Checkbox, Table, Image } from "@mantine/core";

export default function CustomTable() {
  const { supplier, search } = useAppContext();
  const { products, isPending, isError, error } = useFetchProducts(
    supplier,
    search,
  );
  const { customToast } = useToast();

  if (!isPending && isError) {
    customToast(getErrorMessage(error), {
      type: "error",
    });
  }

  const rows =
    products && products.length > 0 ? (
      products.map((product, idx) => (
        <Table.Tr key={product.SKU}>
          <Table.Td>
            <Checkbox
              variant="outline"
              styles={{
                input: {
                  background: "transparent",
                  cursor: "pointer",
                },
              }}
            />
          </Table.Td>
          <Table.Td>{`${idx + 1}.`}</Table.Td>
          <Table.Td className="!pb-3 !pt-5">
            <Image
              radius="sm"
              src={product.Image_1}
              h={50}
              w={50}
              fit="contain"
              fallbackSrc={`https://placehold.co/50x50?text=${product.Name}`}
              alt={product.Name}
              className="min-w-max"
              loading="lazy"
            />
          </Table.Td>
          <Table.Td>{product.SKU}</Table.Td>
          <Table.Td>
            <p className="line-clamp-3 min-w-44">
              {product.Name ?? product.supplier}
            </p>
          </Table.Td>
          <Table.Td>
            <p className="line-clamp-3 min-w-64">{product.Title}</p>
          </Table.Td>
          <Table.Td>
            <p className="line-clamp-3 min-w-64">{product.Description}</p>
          </Table.Td>
          <Table.Td>
            <p className="min-w-max">{product.Brand}</p>
          </Table.Td>
          <Table.Td>{product["Cost Price"]}</Table.Td>
          <Table.Td>{product.Quantity}</Table.Td>
          <Table.Td>
            <p className="min-w-max">
              {product.size ?? product["Bulk Weight"]}
            </p>
          </Table.Td>
        </Table.Tr>
      ))
    ) : (
      <Table.Tr>
        <Table.Td colSpan={11} className="!p-12 text-center">
          {isPending ? "Fetching..." : "Nothing found"}
        </Table.Td>
      </Table.Tr>
    );

  return (
    <Table.ScrollContainer minWidth={500}>
      <Table>
        <Table.Thead className="bg-primary-400 text-neutral-400">
          <Table.Tr className="!border-b-[20px] !border-b-neutral-300">
            <Table.Th className="!py-5">
              <Checkbox
                variant="outline"
                styles={{
                  input: {
                    background: "transparent",
                    cursor: "pointer",
                  },
                }}
              />
            </Table.Th>
            <Table.Th>S/N</Table.Th>
            <Table.Th>Image</Table.Th>
            <Table.Th>SKU</Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>Title</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Brand</Table.Th>
            <Table.Th>
              <p className="min-w-max">Cost Price</p>
            </Table.Th>
            <Table.Th>Quantity</Table.Th>
            <Table.Th>Size</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody className="bg-neutral-100">{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
