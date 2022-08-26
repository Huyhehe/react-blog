const Blog = ({ blog }) => {
  const url = `${process.env.REACT_APP_API_URL}/blogs/delete`;
  const handleDelete = async () => {};
  return (
    <div className="blog">
      <div className="blog-content">
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
        <span>{blog.authorName}</span>
      </div>
      <button onClick={handleDelete}>Delete this blog</button>
    </div>
  );
};

export default Blog;
