function ProductLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-sky-300">
      {children}
    </div>
  );
}

export default ProductLayout;
