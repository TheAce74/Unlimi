import { useAppContext } from "@/context/AppContext";
import { Suppliers } from "@/utils/types";
import { Select } from "@mantine/core";

const options = ["FragranceX", "FragranceNet", "Morris Costumes"];

export default function Filter() {
  const { supplier, setSupplier } = useAppContext();

  const handleChange = (e: string | null) => {
    setSupplier(e as Suppliers);
  };

  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
      <h1 className="font-inter text-lg font-medium text-neutral-900">
        Department List
      </h1>
      <Select
        placeholder="Filter by supplier"
        data={options}
        size="md"
        value={supplier}
        onChange={handleChange}
        checkIconPosition="right"
        aria-label="supplier dropdown"
        className="xs:!w-max !w-40"
        allowDeselect={false}
      />
    </div>
  );
}
