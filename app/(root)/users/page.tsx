import Link from "next/link";

export interface User {
  id: string;
  name: string;
  email: string;
}

async function UserPage() {
  const response = await fetch(process.env.API_URL + "/users");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const users: User[] = await response.json();

  return (
    <>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserPage;
