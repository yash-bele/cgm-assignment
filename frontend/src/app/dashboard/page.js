import CardGrid from "@/components/CardGrid";
import InfoHeader from "@/components/InfoHeader";
import PaginationFooter from "@/components/PaginationFooter";

export default function Dashboard() {
  return (
    <main className="text-white bg-slate-900 w-screen h-screen p-5">
      <div className="max-w-7xl h-full mx-auto space-y-5 flex flex-col">
        <InfoHeader />
        <CardGrid />
        <PaginationFooter />
      </div>
    </main>
  );
}
