async function ProductDetailLayout(props: LayoutProps<"/product/[productId]">) {
  const { productId } = await props.params;
  return (
    <>
      <h1>Product {productId}</h1>
      {props.children}
    </>
  );
}

export default ProductDetailLayout;
