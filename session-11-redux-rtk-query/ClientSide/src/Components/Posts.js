import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetAllPostsQuery, useAddPostMutation } from "../services/postsApi";

const Posts = () => {
  const nevigate = useNavigate();
  const { data, isLoading } = useGetAllPostsQuery();
  const [addPost] = useAddPostMutation();

  if (isLoading) {
    return <div className="text-xl pt-10 pl-5">Loading...</div>;
  }

  const handleAddPost = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    const post = { title, body };
    addPost(post);
  };

  return (
    <div>
      <button onClick={() => nevigate('/redux')} className="absolute top-5 right-5 btn-warning px-5 py-2 rounded-md text-white font-semibold">Redux Demo</button>
      <form onSubmit={handleAddPost} className="my-10  max-w-lg mx-auto">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="input input-bordered w-full max-w-lg block mx-auto"
        />
        <input
          type="text"
          name="body"
          placeholder="Description"
          className="input input-bordered w-full max-w-lg mt-2 block mx-auto"
        />
        <button type="submit" className="btn btn-parimary mt-2">
          Add Post
        </button>
      </form>
      <div className="grid grid-cols-3 gap-10 mx-10 mb-10">
        {data?.map((post) => (
          <div
            key={post?.id}
            className="card w-full  bg-neutral shadow-xl image-full"
          >
            <div className="card-body">
              <h2 className="card-title">
                {post?.title.length > 30
                  ? post?.title?.slice(0, 30) + "..."
                  : post?.title}
              </h2>
              <p>
                {post?.body?.length > 50
                  ? post?.body?.slice(0, 50) + "..."
                  : post?.body}
              </p>
              <div className="card-actions justify-end">
                <Link to={`/postDetails/${post?.id}`}>
                  <button className="btn btn-primary">Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
