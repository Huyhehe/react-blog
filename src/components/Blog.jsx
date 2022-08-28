import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Blog = ({ blog }) => {
  const user = useSelector((state) => state.user?.user);
  const url = `${process.env.REACT_APP_API_URL}/blogs/delete`;
  const navigate = useNavigate();
  const handleDelete = () => {
    try {
      setTimeout(async () => {
        const res = await axios.delete(`${url}/${blog._id}`, {
          headers: {
            authorized: `bearer ${user?.accessToken}`,
          },
        });
        console.log(res);
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="blog relative">
      <div className="blog-content flex flex-col gap-[1rem]">
        <h2 className="text-[2rem] font-bold">{blog.title}</h2>
        <p className="text-[1.25rem]">{blog.content}</p>
        <span className="font-bold text-slate-400">
          Written by <i>{blog.authorName}</i>
        </span>
      </div>
      <div>
        {user?.isAdmin || user?._id === blog.authorID ? (
          <button
            className="p-[0.5rem] border-[2px] border-red-500 text-red-500 font-bold rounded-md mt-[2rem] hover:bg-red-500 hover:text-white transition-all duration-300"
            onClick={handleDelete}
          >
            Delete this blog
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Blog;
