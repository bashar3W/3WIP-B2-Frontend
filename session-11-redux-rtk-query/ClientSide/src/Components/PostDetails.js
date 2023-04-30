import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetPostByIdQuery, useDeletePostMutation, useUpdatePostMutation} from "../services/postsApi";

const PostDetails = () => {
  const id = document.URL.split("postDetails/")[1];
  const { data: post, isLoading } = useGetPostByIdQuery(id);
  const [deletePost, responseInfo] = useDeletePostMutation();
  const [updatePost] = useUpdatePostMutation();
  const navigate = useNavigate();

  if (isLoading) {
    return <div className="text-xl pt-10 pl-5">Loading...</div>;
  }

  const handleDeletePost = async () => {
    const agree = window.confirm("Are you sure? you want to delete this post?");
    if (!agree) {
      return;
    }
    await deletePost(id);
    console.log(responseInfo);
    navigate("/");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    const updatedPost = { id, title, body };
    updatePost(updatedPost);
    navigate('/');
  };

  return (
    <div>
      <h1 className="text-center text-5xl font-bold mb-10 mt-10">
        Post Details
      </h1>
      <div className="flex justify-center">
        <div className="card w-1/2 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">{post?.title}</h2>
            <p>{post?.body}</p>
            <div className="card-actions justify-center mt-5">
              <Link to="/">
                <button className="btn btn-primary">Back</button>
              </Link>
              <button
                onClick={handleDeletePost}
                className="btn btn-error text-white"
              >
                Delete
              </button>
              <label
                htmlFor="my-modal-3"
                className="btn btn-warning text-white"
              >
                Update
              </label>
            </div>
          </div>
        </div>
      </div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <form onSubmit={handleUpdate} className="my-10  max-w-lg mx-auto">
            <input
              type="text"
              name="title"
              defaultValue={post?.title}
              placeholder="Title"
              className="input input-bordered w-full max-w-lg block mx-auto"
            />
            <textarea
              type="text"
              name="body"
              defaultValue={post?.body}
              placeholder="Description"
              className="input input-bordered h-24 w-full max-w-lg mt-2 block mx-auto"
            />
            <button type='submit' className="btn btn-primary mt-5 text-white">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
