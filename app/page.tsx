import { getData } from "@/actions/todoActions";
import Todo from "@/components/Todo";
import Todos from "@/components/Todos";
import Image from "next/image";

export  default async  function  Home() {
  const data = await getData();
  return (
    <main className="flex   items-center justify-between">
     <Todos todos={data}/>
    </main>
  );

}