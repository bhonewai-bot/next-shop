"use client";

import { use } from "react";
import { motion } from "motion/react";

interface User {
  id: number;
  name: string | null;
  email: string;
}

function UserList({ users }: { users: Promise<User[]> }) {
  const allUsers = use(users);

  return (
    <>
      <motion.div
        animate={{
          scale: 2,
          transition: { duration: 20 },
        }}
      >
        {allUsers.map((user) => (
          <h1 key={user.id}>{user.name}</h1>
        ))}
      </motion.div>
    </>
  );
}

export default UserList;
