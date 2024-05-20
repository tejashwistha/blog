// src/components/BlogList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';

const BlogList = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    useEffect(() => {
        const fetchPosts = async () => {
            // Mock API call
            const response = await fetch('/posts.json');
            const data = await response.json();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // Filter posts based on search term
    const filteredPosts = currentPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="blog-list">
            <h1>Blog Posts</h1>
            <input
                type="text"
                placeholder="Search posts..."
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredPosts.map(post => (
                    <li key={post.id}>
                        <h2><Link to={`/blog/${post.id}`}>{post.title}</Link></h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </div>
    );
};

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default BlogList;
