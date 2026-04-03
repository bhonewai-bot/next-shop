"use client";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <button onClick={() => unstable_retry()}>Try again</button>
    </div>
  );
}
