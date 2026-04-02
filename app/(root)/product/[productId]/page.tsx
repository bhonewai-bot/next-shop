"use client";

import { notFound, useParams } from "next/navigation";

// function ProductDetail(props: PageProps<"/product/[productId]">) {
function ProductDetail() {
  //   const { productId } = useParams();
  const { productId } = useParams<{ productId: string }>();

  if (parseInt(productId) > 100) {
    notFound();
  }

  return (
    <>
      <h2>Product {productId}</h2>
    </>
  );
}

export default ProductDetail;
