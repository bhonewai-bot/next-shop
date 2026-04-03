// "use client";

// import { useParams } from "next/navigation";

async function ProductDetail(props: PageProps<"/product/[productId]">) {
  // function ProductDetail() {
  const { productId } = await props.params;
  //   const { productId } = useParams();
  //   const { productId } = useParams<{ productId: string }>();

  if (parseInt(productId) > 120) {
    // notFound();
    throw new Error("Cannot find product!");
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <>
      <h2>Product {productId}</h2>
    </>
  );
}

export default ProductDetail;
