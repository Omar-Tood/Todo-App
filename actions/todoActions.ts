"use server";
import {eq} from "drizzle-orm";
import {revalidatePath} from "next/cache";

import db from "@/db/drizzle";
import {todos} from "@/db/schema";

export const getData = async () => {
  const data = await db.select().from(todos);
  return data;
};

export const addTodo = async (id: number , text: string) => {
  await db.insert(todos).values({
    id: id,
    text: text,
  });
  revalidatePath("/");
};

export const deleteTodo = async (id: number) => {
  await db.delete(todos).where(eq(todos.id, id));

  revalidatePath("/");
};

export const toggleTodo = async (id: number, done: boolean) => {
  await db
    .update(todos)
    .set({
      done: done,
    })
    .where(eq(todo.id, id));

  revalidatePath("/");
};

export const editTodo = async (id: number, text: string) => {
  await db
    .update(todo)
    .set({
      text: text,
    })
    .where(eq(todo.id, id));

  revalidatePath("/");
};