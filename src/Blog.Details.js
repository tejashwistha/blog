// src/components/BlogDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetails.css';

const BlogDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            // Mock API call
            const response = await fetch(`/posts/${id}.json`);
            const data = await response.json();
            setPost(data);
        };

        const fetchComments = async () => {
            // Mock API call
            const response = await fetch(`/posts/${id}/comments.json`);
            const data = await response.json();
            setComments(data);
        };

        fetchPost();
        fetchComments();
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div className="blog-details">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <section className="comments">
                <h2>Comments</h2>
                <ul>
                    {comments.map(comment => (
                        <li key={comment.id}>
                            <p>{comment.body}</p>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="share">
                <h2>Share this post</h2>
                {/* Add sharing buttons */}
            </section>
        </div>
    );
};

export default BlogDetails;
