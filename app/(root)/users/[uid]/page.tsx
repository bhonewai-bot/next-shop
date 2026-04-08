import { Post } from "../../posts/page";
import { User } from "../page";

async function getUser(userId: string): Promise<User> {
  return await fetch(process.env.API_URL + `/users/${userId}`).then((res) =>
    res.json(),
  );
}

async function getPosts(userId: string): Promise<Post[]> {
  return await fetch(process.env.API_URL + `/posts?authorId=${userId}`).then(
    (res) => res.json(),
  );
}

export default async function UserDetail({
  params,
}: {
  params: Promise<{ uid: string }>;
}) {
  const { uid } = await params;

  // Sequential
  /* const userData = getUser(uid);
  const postsData = getPosts(uid);
  const [user, posts] = await Promise.all([userData, postsData]); */

  // Parallel
  /* const [userResult, postsResult] = await Promise.allSettled([
    getUser(uid),
    getPosts(uid),
  ]);

  const user = userResult.status === "fulfilled" ? userResult.value : null;
  const posts = postsResult.status === "fulfilled" ? postsResult.value : []; */

  // Preloading
  preload(uid);
  const user = await getUser(uid);

  return (
    <div>
      <h1>User Detail</h1>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      {/* <p className="font-bold text-teal-700">Post list</p> */}
      {user?.email !== "admin@example.com" && <Posts userId={uid} />}
    </div>
  );
}

const preload = (userId: string) => {
  void getPosts(userId);
};

async function Posts({ userId }: { userId: string }) {
  const posts = await getPosts(userId);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
