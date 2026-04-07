import PostClient from "@/components/postClient";

async function PostDetail({ params }: { params: Promise<{ pid: string }> }) {
  const { pid } = await params;
  return (
    <div>
      <h1>Post Detail</h1>
      <PostClient postId={pid} />
    </div>
  );
}

export default PostDetail;
