// import { serial } from "drizzle-orm/mysql-core";
import { integer, text, boolean, pgTable,serial, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users",{
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow()
})

export const todo = pgTable("todo", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
});

