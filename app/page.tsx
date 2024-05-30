import { getData } from "@/actions/todoActions";
import { getAllUser } from "@/actions/userActions";
import Todo from "@/components/Todo";
import Todos from "@/components/Todos";
import Image from "next/image";

export  default async  function  Home() {
  const user =  await getAllUser()
  const data = await getData();
  return (
    <main className="flex   items-center justify-between">
     <Todos todos={data} user={1}/>
    </main>
  );

}