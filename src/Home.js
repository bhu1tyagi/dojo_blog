import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'My 1st blog', body: 'lorem ipsum...', author: "Bhuwan", id: 0},
        {title: 'My 2nd blog', body: 'lorem ipsum...', author: "Bhuwan 1", id: 1},
        {title: 'My 3rd blog', body: 'lorem ipsum...', author: "Bhuwan 2", id: 2}
    ]);

    return (
      <div className="home">
        <BlogList blogs = {blogs} title="All Blogs"/>
      </div>
    );
  }
   
  export default Home;