import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import BlogList from "~/components/BlogList";

const MyBlogs = () => {
  const user = useOutletContext();
  const blogList = useSelector((state) =>
    state.blogs.blogList.filter((blog) => blog.authorID === user._id)
  );
  return (
    <>
      <BlogList blogList={blogList} />
    </>
  );
};

export default MyBlogs;
