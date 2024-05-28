import db from "@/db/drizzle";
import { todo } from "@/db/schema";

export const addTodo = async (id: number, text: string) => {
  await db.insert(todo).values({
    id: id,
    text: text,
  });
};