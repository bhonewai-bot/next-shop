import UserList from "@/components/userList";
import prisma from "@/lib/prisma";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

function getUsers() {
  return prisma.user.findMany();
}

async function Authors() {
  const users = getUsers();

  return (
    <>
      <h2 className="text-2xl">Authors</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <UserList users={users} />
      </Suspense>
    </>
  );
}

export default Authors;
