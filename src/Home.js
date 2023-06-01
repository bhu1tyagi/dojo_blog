import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [fetchPending, setFetchPending] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        fetch('http://localhost:8000/blogs')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
          setFetchPending(false);
        });
      }, 1000)
    }, [])

    return (
      <div className="home">
        {fetchPending && <div>Loading.....</div>}
        {blogs && <BlogList blogs = {blogs} title="All Blogs"/>}
      </div>
    );
  }
  
  export default Home;