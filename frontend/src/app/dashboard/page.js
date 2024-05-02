"use client";
import { useState } from "react";
import CardGrid from "@/components/CardGrid";
import InfoHeader from "@/components/InfoHeader";
import Loading from "@/components/Loading";
import PaginationFooter from "@/components/PaginationFooter";
import { useGetAllUsersQuery, useGetUserQuery } from "@/store/api";

export default function Dashboard() {
  const [page, setPage] = useState(1);
  const { data: user } = useGetUserQuery();
  const { isLoading, data: allUsers } = useGetAllUsersQuery();

  return (
    <main className="text-white bg-slate-900 w-screen h-screen p-5">
      <div className="max-w-7xl h-full mx-auto space-y-5 flex flex-col">
        <InfoHeader data={user} />
        {isLoading ? <Loading /> : <CardGrid data={allUsers} userId={user?._id} page={page} />}
        <PaginationFooter data={allUsers} setPage={setPage} />
      </div>
    </main>
  );
}
