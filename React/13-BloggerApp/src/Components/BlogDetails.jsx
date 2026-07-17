function BlogDetails() {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with React",
      author: "John",
      date: "10-07-2026"
    },
    {
      id: 2,
      title: "Understanding JSX",
      author: "Alice",
      date: "12-07-2026"
    },
    {
      id: 3,
      title: "React Hooks Guide",
      author: "David",
      date: "15-07-2026"
    }
  ];

  return (
    <div>
      <h2>Blog Details</h2>

      {blogs.map((blog) => (
        <div key={blog.id}>
          <p><b>Title:</b> {blog.title}</p>
          <p><b>Author:</b> {blog.author}</p>
          <p><b>Date:</b> {blog.date}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;