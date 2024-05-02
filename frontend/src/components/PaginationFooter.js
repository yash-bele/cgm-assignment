"use client";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export default function PaginationFooter({ length, setPage }) {
  const handlePageChange = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <ReactPaginate
      previousLabel={<GoChevronLeft />}
      nextLabel={<GoChevronRight />}
      breakLabel="..."
      pageCount={Math.ceil(length / 10)}
      marginPagesDisplayed={1}
      pageRangeDisplayed={0}
      onPageChange={handlePageChange}
      containerClassName="flex border border-slate-500 rounded-lg w-fit mx-auto overflow-hidden text-sm"
      pageLinkClassName="w-10 h-10 grid place-items-center border-r border-slate-500"
      previousLinkClassName="w-10 h-10 grid place-items-center border-r border-slate-500 text-white text-xl"
      nextLinkClassName="w-10 h-10 grid place-items-center  text-white text-xl"
      breakLinkClassName="w-10 h-10 grid place-items-center border-r border-slate-500 "
      activeClassName="text-white bg-slate-800"
    />
  );
}
