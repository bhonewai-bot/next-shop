"use client";

import { Post } from "@/app/(root)/posts/page";
import api from "@/app/lib/axios";
import { useEffect, useState } from "react";

function PostClient({ postId }: { postId: string }) {
  const [post, setPost] = useState<Post>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        /* const res = await fetch(
          process.env.NEXT_PUBLIC_API_URL + `/posts/${postId}`,
        ); */

        /* if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        } */

        // const data = await res.json();

        const res = await api.get(`/posts/${postId}`);

        if (res.status !== 200) {
          throw new Error(`Request failed with status ${res.status}`);
        }

        setPost(res.data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Post loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <h1 className="text-2xl">Post Client</h1>
      <p>{post?.title}</p>
    </>
  );
}

export default PostClient;
