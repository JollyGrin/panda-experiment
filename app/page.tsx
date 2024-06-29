import React, { Suspense } from "react";
import { ParsedUrlQuery } from "querystring";
import { ModalButton } from "./ModalButton";
import { css } from "@/styled-system/css";
import { Wrap } from "@/styled-system/jsx";
import { TestModal } from "./TestModal";

interface HomeProps {
  searchParams: ParsedUrlQuery;
}

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// const fetchPosts = async (): Promise<Post[]> => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };

const fetchPosts = async (): Promise<Post[]> => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-cache",
      });
      const data = await res.json();
      resolve(data);
    }, 5000); // Simulate a 2-second delay
  });
};

const Posts = React.lazy(async () => {
  const data = await fetchPosts();
  return {
    default: () => (
      <>
        {data.map((record) => (
          <div key={record.id} className={css({ bg: "blue.500" })}>
            {record.id}
          </div>
        ))}
      </>
    ),
  };
});

export default function Home({ searchParams }: HomeProps) {
  const isOpen = searchParams.modal === "true";

  return (
    <main style={{ position: "relative", padding: "3rem" }}>
      {isOpen && <TestModal />}
      <ModalButton />
      <Wrap>
        <Suspense fallback={<div>Loading posts...</div>}>
          <Posts />
        </Suspense>
      </Wrap>
    </main>
  );
}
