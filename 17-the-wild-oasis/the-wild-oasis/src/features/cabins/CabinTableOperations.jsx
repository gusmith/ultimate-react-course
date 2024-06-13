import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

export default function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No dscount" },
          { value: "with-discount", label: "With dscount" },
        ]}
      />
    </TableOperations>
  );
}
