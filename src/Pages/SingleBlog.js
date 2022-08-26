import { useParams } from "react-router-dom";
import Blog from "../components/Blog";
import React from "react";
import { useSelector } from "react-redux";

const SingleBlog = () => {
  const params = useParams();
  const blogs = useSelector((state) => state.blogs.blogList);
  const blog = blogs.find((blog) => blog._id.toString() === params.id);

  return (
    <div className="single-blog">
      <Blog blog={blog}></Blog>
    </div>
  );
};

export default SingleBlog;
