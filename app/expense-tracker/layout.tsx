import type { ReactNode } from "react";
import AppSubNav from "@/components/expense-tracker/AppSubNav";

export default function ExpenseTrackerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <AppSubNav />
      {children}
    </>
  );
}
