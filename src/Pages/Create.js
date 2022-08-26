import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const url = `${process.env.REACT_APP_API_URL}/blogs/add`;

  const submit = (e) => {
    e.preventDefault();
    const newBlog = {
      title,
      content,
      authorID: user._id,
    };

    setIsPending(true);
    setTimeout(async () => {
      try {
        const res = await axios.post(url, newBlog, {
          headers: {
            authorized: `bearer ${user.accessToken}`,
          },
        });
        console.log(res);
        setIsPending(false);
        setTitle("");
        setContent("");
        navigate("/");
      } catch (e) {
        console.log(e.response.data);
      }
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-10 items-center p-5">
      <h2 className="text-3xl">Create your own new blog!</h2>
      <div className="w-1/2">
        <form
          onSubmit={submit}
          className="flex flex-col items-center gap-4 max-w-full"
        >
          <div className="flex flex-col gap-2 w-full">
            <label className="text-xl">Title:</label>
            <input
              className="text-lg border-solid border-slate-300 border outline-none px-2 py-px focus:border-slate-600"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-xl">Content:</label>
            <textarea
              className="text-lg border-solid border-slate-300 border outline-none px-2 py-px focus:border-slate-600 min-h-[10rem] max-h-[15rem]"
              type="text"
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button
            className="border rounded-md w-fit p-3 border-cyan-400 hover:bg-cyan-400 hover:text-white transition"
            type="submit"
          >
            Add blog
          </button>
        </form>
      </div>
      {isPending && <span>Uploading...</span>}
    </div>
  );
};

export default Create;
