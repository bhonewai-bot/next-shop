"use server";

import { revalidateTag, revalidatePath } from "next/cache";

export async function refreshPostsCache() {
  // revalidateTag("posts", "max");
  revalidatePath("/blog/[pid]", "page");
}
