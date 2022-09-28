import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Home", body: "lasuhgdoiauyg", author: "Bob", id: 1 },
    { title: "Fun w/ react!", body: "asdfiug", author: "David", id: 2 },
    { title: "Need a backend?", body: "asdfhjer", author: "David", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
