import PostHybrid from "@/components/postHybrid";

export interface Post {
  id: string;
  title: string;
  content?: string;
}

async function PostPage() {
  const response = await fetch(process.env.API_URL + "/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts: Post[] = await response.json();

  return (
    <>
      <h1>Post List</h1>
      <PostHybrid initialData={posts} />
    </>
  );
}

export default PostPage;
