import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="bg-amber-300 p-4 text-2xl font-bold text-slate-700">
        Hello NextJs
      </h1>
      <Link href={"/login"}>Go to Login</Link>
      <Link href={"/product"}>Go to Product</Link>
    </>
  );
}
