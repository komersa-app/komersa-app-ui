'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import animationData from "../../src/app/lottie/Animation - 1717788797804 (1).json";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, [router]);

  return (
    <div>
      <Lottie animationData={animationData} loop={true} autoplay={true} className="mx-auto w-60 h-60 my-64" />
    </div>
  );
}

