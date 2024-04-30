"use client";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "./api";

export default function AsyncProvider({ children }) {
  return <ApiProvider api={api}>{children}</ApiProvider>;
}
