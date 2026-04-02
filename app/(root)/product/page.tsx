"use client";

import { useSearchParams } from "next/navigation";

function ProductList() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
  const category = searchParams.get("category");
  const query = searchParams.get("query");

  return (
    <div>
      <h1>Product List</h1>
      <p>Current page: {page}</p>
      <p>Category: {category}</p>
      <p>Query: {query}</p>
    </div>
  );
}

export default ProductList;
