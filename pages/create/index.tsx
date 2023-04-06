import React, { useState } from "react";
import NewPostForm from "../../components/NewPostForm";

type Props = {
  setErrors: (errors: (prevErrors: string[]) => string[]) => void;
};

const Create = ({ setErrors }: Props) => {
  const onSubmit = async (title: string, body: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blog-posts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      console.log("New post created");
    } catch (error: any) {
      setErrors((errors: string[]) => [...errors, error.message]);
    }
  };

  return <NewPostForm onSubmit={onSubmit} />;
};

export default Create;
