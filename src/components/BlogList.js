import { Link } from "react-router-dom";

const BlogList = (props) => {
  const blogList = props.blogList;
  return (
    <div className="flex flex-col gap-5 my-5">
      {blogList.map((blog) => (
        <Link
          to={`singleBlog/${blog._id}`}
          className="flex flex-col gap-2 shadow-md text-gray-400 p-4 hover:shadow-lg hover:text-black transition-all"
          key={blog._id}
        >
          <div className="text-2xl text-cyan-400">{blog.title}</div>
          <div className="blog-list-item-body">{blog.content}</div>
          <div className="blog-list-item-author">Author: {blog.authorName}</div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
