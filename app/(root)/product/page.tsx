async function ProductList({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page = "1", category = "", query = "" } = await searchParams;
  /* const page = searchParams.get("page") || "1";
  const category = searchParams.get("category");
  const query = searchParams.get("query"); */

  return (
    <div>
      <h1>Product List - {new Date().toLocaleTimeString()}</h1>
      <p>Current page: {page}</p>
      <p>Category: {category}</p>
      <p>Query: {query}</p>
    </div>
  );
}

export default ProductList;
