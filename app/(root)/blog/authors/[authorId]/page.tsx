export const dynamicParams = false;

export const revalidate = 60; // revalidate this page every 60 seconds

export async function generateStaticParams() {
  /* const authors = await fetch(
    "https://jsonplaceholder.typicode.com/users",
  ).then((res) => res.json());
  return authors.map((author: { id: string }) => ({
    authorId: author.id,
  })); */
  return [{ authorId: "1" }, { authorId: "2" }, { authorId: "3" }];
}

async function AuthorDetail({
  params,
}: {
  params: Promise<{ authorId: string }>;
}) {
  const { authorId } = await params;
  return (
    <div>
      Author {authorId} {new Date().toLocaleTimeString()}
    </div>
  );
}

export default AuthorDetail;
