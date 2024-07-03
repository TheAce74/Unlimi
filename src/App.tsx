import Header from "@/components/Header";
import CustomTable from "@/components/CustomTable";
import Filter from "@/components/Filter";

function App() {
  return (
    <main>
      <Header />
      <section className="xs:p-4 mx-auto min-h-screen max-w-[120em] px-2 py-4 md:p-6 lg:px-16">
        <Filter />
        <CustomTable />
      </section>
    </main>
  );
}

export default App;
