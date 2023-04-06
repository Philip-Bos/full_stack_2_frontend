import React, { useState } from "react";
import { GetStaticProps, NextPage } from "next";
import { Post } from "../types/Post";
import Link from "next/link";
import PostList from "../components/PostList";

type Props = {
  posts: Post[];
};

const IndexPage: NextPage<Props> = ({ posts }) => {
  const [statePosts, setPosts] = useState(posts);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blog-posts/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete post");
      }

      console.log(`Post with id ${id} deleted`);

      // Update the state to exclude the deleted post
      setPosts(statePosts.filter((post) => post.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>

      <Link href="/create" className="inline-block mb-6 text-blue-600">
        Create a new post
      </Link>
      <div>
        <PostList posts={statePosts} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/blog-posts`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch posts. Please try again later.");
    }
    const posts: Post[] = await response.json();
    return {
      props: { posts },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { posts: [] },
    };
  }
};

export default IndexPage;
