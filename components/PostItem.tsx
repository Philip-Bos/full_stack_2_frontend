import React from "react";
import { Post } from "../types/Post";
import Link from "next/link";
interface PostItemProps {
  post: Post;
  handleDelete: (id: number) => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, handleDelete }) => {
  const timestamp = post.timestamp;
  const date = new Date(timestamp);
  const dateString = date.toLocaleString();
  return (
    <div className="border-b border-gray-200 py-4 flex justify-between items-center">
      <div className="flex flex-col">
        <Link href={`/posts/${post.id}`} className="text-xl font-bold">
          {post.title}
        </Link>
        <p className="text-gray-500">{dateString}</p>
      </div>
      <button onClick={() => handleDelete(post.id)}>x</button>
    </div>
  );
};

export default PostItem;
