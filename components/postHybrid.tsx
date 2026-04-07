"use client";

import { Post } from "@/app/(root)/posts/page";
import api from "@/app/lib/axios";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (url: string) => api.get(url).then((res) => res.data);

function PostHybrid({ initialData }: { initialData: Post[] }) {
  const { data: posts = [], error } = useSWR<Post[]>(`/posts`, fetcher, {
    fallbackData: initialData,
    revalidateOnMount: true,
  });

  if (error)
    return (
      <div>Error: {(error as Error).message || "Failed to load posts"}</div>
    );

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostHybrid;
