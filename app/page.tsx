import { getData } from "@/actions/todoActions";
import { getAllUser } from "@/actions/userActions";
import Todo from "@/components/Todo";
import Todos from "@/components/Todos";
import Image from "next/image";

export  default async  function  Home() {
  const users =  await getAllUser();
  console.log(users)
  const data = await getData(users[0].id);
  return (
    <main className="flex   items-center justify-between">
     <Todos todos={data} user={users[0]}/>
    </main>
  );

}