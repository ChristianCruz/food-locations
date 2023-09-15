// to enable useEffect:
"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Login() {
  //use data session to store login state
  const { data: session } = useSession();
  const router = useRouter();
  // useEffect is used to see if user is logged in or not
  // we pass empty array to avoid executing the function indefinitely
  useEffect(() => {
    console.log("session:", session);
    if (session?.user) {
      router.push("/");
    }
  }, []);
  return (
    <div className="flex flex-col justify-center items-center mt-[10%] gap-10">
      <Image src="/logo.svg" alt="logo" width={100} height={100} />
      <div className="px-6 sm:px-0 max-w-sm">
        <button type="button" onClick={() => signIn()}>
          Sign up with Google
        </button>
      </div>
    </div>
  );
}
export default Login;
