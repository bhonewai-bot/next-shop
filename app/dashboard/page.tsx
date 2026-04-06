import { refreshPostsCache } from "../actions/post";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <form action={refreshPostsCache}>
        <button
          type="submit"
          className="rounded-2xl bg-amber-600 px-6 py-2 text-black"
        >
          Refresh Posts cache
        </button>
      </form>
    </div>
  );
}

export default Dashboard;
