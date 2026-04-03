function ProductLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <h1 className="bg-amber-600">Navigation Header</h1>
      {children}
      <h2 className="bg-teal-700">Footer</h2>
    </div>
  );
}

export default ProductLayout;
