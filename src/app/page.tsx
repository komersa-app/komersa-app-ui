'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const route = useRouter()
  useEffect(() =>{
    route.push('/home')
  },[route]);
  return <h1 className="text-center text-3xl font-bold">Redirecting to home</h1>;
}
