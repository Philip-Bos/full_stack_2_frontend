import { useRouter } from "next/router";
import React, { useState } from "react";

interface NewPostFormProps {
  onSubmit: (title: string, body: string) => void;
}

const NewPostForm: React.FC<NewPostFormProps> = ({ onSubmit }) => {
  const Router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, body);
    Router.push("/");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Create New Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2">
            Title
          </label>
          <input
            type="text"
            required
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="body" className="block mb-2">
            Body
          </label>
          <textarea
            id="body"
            required
            onChange={(e) => setBody(e.target.value)}
            className="w-full border border-gray-300 p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default NewPostForm;
