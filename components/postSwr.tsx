"use client";

import { Post } from "@/app/(root)/posts/page";
import api from "@/app/lib/axios";
import useSWR from "swr";

const fetcher = (url: string) => api.get(url).then((res) => res.data);

function PostSwr({ postId }: { postId: string }) {
  const {
    data: post,
    error,
    isLoading,
  } = useSWR<Post>(`/posts/${postId}`, fetcher);

  if (error)
    return (
      <div>Error: {(error as Error).message || "Failed to load post"}</div>
    );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Post SWR</h1>
      <p>
        {post?.title} by {post?.content}
      </p>
    </div>
  );
}

export default PostSwr;
