import { SignedIn, useClerk, useUser } from "@clerk/nextjs";
import type { NextPage } from "next";
import type { Post } from "@prisma/client";
import Image from "next/image";

const Home: NextPage = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const primaryEmailAddress = user?.primaryEmailAddress?.emailAddress;
  console.log(primaryEmailAddress);

  const post: Post = {
    id: "foo",
    author: "foo",
    authorEmail: process.env.NEXT_PUBLIC_EMAIL || "",
    body: "bar",
    createdAt: new Date(Date.now()),
    title: "baz",
    views: 0,
  };

  return (
    <main>
      <SignedIn>
        {primaryEmailAddress === post.authorEmail && (
          <Image
            onClick={async () => {}}
            alt="delete"
            src="/vercel.svg"
            width={100}
            height={100}
          />
        )}
      </SignedIn>
      <button
        onClick={() => {
          openSignIn();
        }}
      >
        Sign In
      </button>
    </main>
  );
};

export default Home;
