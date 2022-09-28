import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Home", body: "lasuhgdoiauyg", author: "David", id: 1 },
    { title: "Fun w/ react!", body: "asdfiug", author: "David", id: 2 },
    { title: "Need a backend?", body: "asdfhjer", author: "David", id: 3 },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" />
    </div>
  );
};

export default Home;
