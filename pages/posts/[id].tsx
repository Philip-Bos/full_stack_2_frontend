import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";

import { Post } from "../../types/Post";

// Define the expected structure of the params object
interface PostPageParams extends ParsedUrlQuery {
  id: string;
}

// Use the PostPageParams type as a generic argument for GetStaticProps
export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch the IDs of all the blog posts
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blog-posts/`
  );
  const posts: Post[] = await response.json();
  const postIds = posts.map((post) => ({ params: { id: post.id.toString() } }));
  // Return an object with paths and fallback properties. If a requested page is not generated during the build time, Next.js will server-render the content on-demand and cache it for future visits.
  return { paths: postIds, fallback: "blocking" };
};

// Use the PostPageParams type as a generic argument for GetStaticProps
export const getStaticProps: GetStaticProps<
  { post: Post },
  PostPageParams
> = async ({ params }) => {
  // Check if params object is present
  if (!params) {
    return { notFound: true };
  }

  // Fetch the post data for the specified ID
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blog-posts/${params.id}`
  );
  const post: Post = await response.json();

  // Return an object with the post data as props
  return { props: { post } };
};

const PostPage: React.FC<{ post: Post }> = ({ post }) => {
  const timestamp = post.timestamp;
  const date = new Date(timestamp);
  const dateString = date.toLocaleString();
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-4">{dateString}</p>
      <div className="prose prose-lg">
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default PostPage;
