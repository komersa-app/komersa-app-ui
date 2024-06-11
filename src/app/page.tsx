'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const route = useRouter()
  useEffect(() =>{
    route.push('/home')
  },[route]);
  return null;
}
