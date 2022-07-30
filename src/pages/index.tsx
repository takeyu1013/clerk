import { SignedIn, useUser } from "@clerk/nextjs";
import type { NextPage } from "next";
import type { Post } from "@prisma/client";
import Image from "next/image";

const Home: NextPage = () => {
  const { user } = useUser();
  const primaryEmailAddress = user?.primaryEmailAddress?.emailAddress;
  console.log(primaryEmailAddress);

  const post: Post = {
    id: "foo",
    author: "foo",
    authorEmail: "foo@example.com",
    body: "bar",
    createdAt: new Date(Date.now()),
    title: "baz",
    views: 0,
  };

  return (
    <SignedIn>
      {primaryEmailAddress === post.authorEmail && (
        <Image onClick={async () => {}} alt="delete" src="vercel.svg" />
      )}
    </SignedIn>
  );
};

export default Home;
