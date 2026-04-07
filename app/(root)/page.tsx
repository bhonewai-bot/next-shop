// import Carousel from "@/components/carousel";
import Link from "next/link";

export default function Home() {
  /* const items = [
    {
      id: "1",
      src: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/sekiro/shadows-die-twice/sekiro-shadowsdietwice-2.jpg",
      alt: "Beautiful landscape",
      title: "Amazing View",
      description: "A stunning landscape photograph",
    },
    {
      id: "2",
      src: "https://preview.redd.it/prove-to-me-you-played-ghost-of-tsushima-v0-r6tjotuiyeuf1.jpeg?width=640&crop=smart&auto=webp&s=8093fcdb0c086f9a4c932fd61b1da11a006be803",
      alt: "City skyline",
      title: "Urban Life",
      description: "The vibrant city at night",
    },
  ]; */

  return (
    <>
      <h1 className="bg-amber-300 p-4 text-2xl font-bold text-slate-700">
        Hello NextJs - {new Date().toLocaleTimeString()}
      </h1>
      <Link href={"/login"}>Go to Login</Link>
      <Link href={"/blog"}>Go to Blog</Link>
      <Link href={"/posts"}>Go to Posts</Link>
      {/* <Carousel
        items={items}
        autoplay={{ enabled: true, interval: 3000 }}
        infinite
        pauseOnHover
      /> */}
    </>
  );
}
