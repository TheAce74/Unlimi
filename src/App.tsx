import Header from "@/components/Header";
import CustomTable from "@/components/CustomTable";

function App() {
  return (
    <main>
      <Header />
      <section className="xs:p-4 mx-auto min-h-screen max-w-[120em] p-2 md:p-6 lg:px-16">
        <h1 className="font-inter mb-6 text-lg font-medium text-neutral-900">
          Department List
        </h1>
        <CustomTable />
      </section>
    </main>
  );
}

export default App;
