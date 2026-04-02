"use client";

import { usePathname } from "next/navigation";

function NotFoundPage() {
  const pathname = usePathname(); // domain.com/smt
  const firstPath = pathname.split("/")[1];

  return (
    <div className="flex min-h-screen items-center justify-center bg-indigo-900">
      <h1 className="text-3xl font-bold">404 | {firstPath} Not Found</h1>
    </div>
  );
}

export default NotFoundPage;
