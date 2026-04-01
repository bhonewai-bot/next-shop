async function AuthorDetail({
  params,
}: {
  params: Promise<{ authorId: string }>;
}) {
  const { authorId } = await params;
  return <>Author {authorId}</>;
}

export default AuthorDetail;
