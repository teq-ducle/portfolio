"use client";
import { useEffect } from "react";
import "@/app/styles/globals.css";
import { useRouter } from "next/navigation";
export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/vi");
  }, []);

  return <></>;
}
