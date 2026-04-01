"use client";

import { useParams } from "next/navigation";

// function ProductDetail(props: PageProps<"/product/[productId]">) {
function ProductDetail() {
  //   const { productId } = useParams();
  const { productId } = useParams<{ productId: string }>();

  return (
    <>
      <h2>Product {productId}</h2>
    </>
  );
}

export default ProductDetail;
