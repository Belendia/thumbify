"use server";

import { redirect } from "next/navigation";
import Signin from "~/components/ui/signin";
import { auth } from "~/server/auth";

const Page = async () => {
  const sessionSession = await auth();

  if (sessionSession?.user) {
    redirect("/dashboard");
  }

  return (
    <>
      <Signin />
    </>
  );
};

export default Page;
