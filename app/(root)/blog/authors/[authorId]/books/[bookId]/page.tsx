async function BookDetail({
  params,
}: {
  params: Promise<{ authorId: string; bookId: string }>;
}) {
  const { authorId, bookId } = await params;
  return (
    <>
      Book {bookId} by Author {authorId}
    </>
  );
}

export default BookDetail;
