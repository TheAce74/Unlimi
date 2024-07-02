import { Departments } from "@/utils/types";
import { Checkbox, Table, Image } from "@mantine/core";
import dept from "@/assets/dept.png";

export default function CustomTable() {
  const depts: Departments = [
    {
      image: dept,
      sku: "MG234567",
      name: "Gloss",
      title: "Beauty and glamour",
      description: "Lorem ipsum dolor sit amet consectetur.",
      brand: 18,
      price: 38,
      quantity: 36,
      size: 1800,
    },
    {
      image: dept,
      sku: "MG234567",
      name: "Gloss",
      title: "Beauty and glamour",
      description: "Lorem ipsum dolor sit amet consectetur.",
      brand: 18,
      price: 38,
      quantity: 36,
      size: 1800,
    },
    {
      image: dept,
      sku: "MG234567",
      name: "Gloss",
      title: "Beauty and glamour",
      description: "Lorem ipsum dolor sit amet consectetur.",
      brand: 18,
      price: 38,
      quantity: 36,
      size: 1800,
    },
    {
      image: dept,
      sku: "MG234567",
      name: "Gloss",
      title: "Beauty and glamour",
      description: "Lorem ipsum dolor sit amet consectetur.",
      brand: 18,
      price: 38,
      quantity: 36,
      size: 1800,
    },
    {
      image: dept,
      sku: "MG234567",
      name: "Gloss",
      title: "Beauty and glamour",
      description: "Lorem ipsum dolor sit amet consectetur.",
      brand: 18,
      price: 38,
      quantity: 36,
      size: 1800,
    },
    {
      image: dept,
      sku: "MG234567",
      name: "Gloss",
      title: "Beauty and glamour",
      description: "Lorem ipsum dolor sit amet consectetur.",
      brand: 18,
      price: 38,
      quantity: 36,
      size: 1800,
    },
    {
      image: dept,
      sku: "MG234567",
      name: "Gloss",
      title: "Beauty and glamour",
      description: "Lorem ipsum dolor sit amet consectetur.",
      brand: 18,
      price: 38,
      quantity: 36,
      size: 1800,
    },
    {
      image: dept,
      sku: "MG234567",
      name: "Gloss",
      title: "Beauty and glamour",
      description: "Lorem ipsum dolor sit amet consectetur.",
      brand: 18,
      price: 38,
      quantity: 36,
      size: 1800,
    },
    {
      image: dept,
      sku: "MG234567",
      name: "Gloss",
      title: "Beauty and glamour",
      description: "Lorem ipsum dolor sit amet consectetur.",
      brand: 18,
      price: 38,
      quantity: 36,
      size: 1800,
    },
    {
      image: dept,
      sku: "MG234567",
      name: "Gloss",
      title: "Beauty and glamour",
      description: "Lorem ipsum dolor sit amet consectetur.",
      brand: 18,
      price: 38,
      quantity: 36,
      size: 1800,
    },
  ];

  const rows = depts.map((dept, idx) => (
    <Table.Tr key={dept.name}>
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
          src={dept.image}
          h={50}
          w={50}
          fit="contain"
          fallbackSrc={`https://placehold.co/50x50?text=${dept.name}`}
          alt={dept.name}
          className="min-w-max"
        />
      </Table.Td>
      <Table.Td>{dept.sku}</Table.Td>
      <Table.Td>{dept.name}</Table.Td>
      <Table.Td>
        <p className="min-w-max">{dept.title}</p>
      </Table.Td>
      <Table.Td>
        <p className="min-w-max">{dept.description}</p>
      </Table.Td>
      <Table.Td>{dept.brand}</Table.Td>
      <Table.Td>{dept.price}</Table.Td>
      <Table.Td>{dept.quantity}</Table.Td>
      <Table.Td>{dept.size}</Table.Td>
    </Table.Tr>
  ));

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
            <Table.Th>Cost Price</Table.Th>
            <Table.Th>Quantity</Table.Th>
            <Table.Th>Size</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody className="bg-neutral-100">{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
