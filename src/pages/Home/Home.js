import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import api from "../../Api";
import Posts from "../../components/Posts/Posts";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [postsPerPage, setPostsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const res = await api.get("/");
            setPosts(res.data);
        }

        fetchData();
    }, [posts])
    
    const indexOfTheLastPost = currentPage * postsPerPage;
    const indexOfTheFirstPost = indexOfTheLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfTheFirstPost, indexOfTheLastPost);

    return(
        <div>
            <Navbar />
            <div className="posts-div">
                <Posts posts={currentPosts}/>
                <Pagination totalPosts={posts.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
            </div>
        </div>
    )
}

export default Home;