import React from "react";
import { Post } from "../types/Post";
import PostItem from "./PostItem";

type Props = {
  posts?: Post[];
  handleDelete: (id: number) => void;
};

const PostList: React.FC<Props> = ({ posts = [], handleDelete }) => {
  if (!posts) {
    return <div>No posts found.</div>;
  }

  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default PostList;
