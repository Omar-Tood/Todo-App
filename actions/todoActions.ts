"use server";
import {eq} from "drizzle-orm";
import {revalidatePath} from "next/cache";

import db from "@/db/drizzle";
import {todo} from "@/db/schema";

export const getData = async () => {
  const data = await db.select().from(todo);
  return data;
};

export const addTodo = async (text: string) => {
  await db.insert(todo).values({
    text: text,
  });
  revalidatePath("/");
};

export const deleteTodo = async (id: number) => {
  await db.delete(todo).where(eq(todo.id, id));

  revalidatePath("/");
};

export const toggleTodo = async (id: number, done: boolean) => {
  await db
    .update(todo)
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