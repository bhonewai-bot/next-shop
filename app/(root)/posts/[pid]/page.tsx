// import PostClient from "@/components/postClient";
// import PostSwr from "@/components/postSwr";

import { Suspense } from "react";

interface Post {
  id: string;
  title: string;
  authorId: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

async function getPost(postId: string): Promise<Post> {
  return await fetch(process.env.API_URL + `/posts/${postId}`).then((res) =>
    res.json(),
  );
}

async function getUser(userId: string): Promise<User> {
  return await fetch(process.env.API_URL + `/users/${userId}`).then((res) =>
    res.json(),
  );
}

export default async function PostDetail({
  params,
}: {
  params: Promise<{ pid: string }>;
}) {
  const { pid } = await params;
  const post = await getPost(pid);

  return (
    <div>
      <h1>Post Detail</h1>
      <p>{post.title}</p>
      <Suspense
        fallback={<p className="font-bold text-amber-700">Loading author...</p>}
      >
        <Author authorId={post.authorId} />
      </Suspense>

      {/* <PostClient postId={pid} /> */}
      {/* <PostSwr postId={pid} /> */}
    </div>
  );
}

async function Author({ authorId }: { authorId: string }) {
  const author = await getUser(authorId);

  return (
    <div>
      <h2>Author: {author.name}</h2>
      <p>{author.email}</p>
    </div>
  );
}
