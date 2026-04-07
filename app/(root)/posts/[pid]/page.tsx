// import PostClient from "@/components/postClient";
import PostSwr from "@/components/postSwr";

async function PostDetail({ params }: { params: Promise<{ pid: string }> }) {
  const { pid } = await params;
  return (
    <div>
      <h1>Post Detail</h1>
      {/* <PostClient postId={pid} /> */}
      <PostSwr postId={pid} />
    </div>
  );
}

export default PostDetail;
