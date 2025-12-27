'use client';
import { useEffect } from "react";
import "./globals.css"
import { useRouter } from "next/navigation";
export default function NotFound() {
  const router = useRouter()
  // useLayoutEffect(() => {
  //   console.log("Hi");
    
  //   // router.replace('/vi')
  // }, [])
  useEffect(() => {
    router.replace('/vi')
  },[])

  return (
    // <div className="notFound">
    //   Page not found
    // </div>
    <></>
  )
}

