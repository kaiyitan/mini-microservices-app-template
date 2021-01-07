import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

export default () => {
    const [posts, setPosts] = useState({});
    console.log("hello")
    const fetchPosts = async () => {
        const res = await axios.get('http://posts.com/posts');
        console.log(res);
        setPosts(res.data);

    }

    useEffect(() => {
        fetchPosts();
    }, []);

    const renderedPosts = Object.values(posts).map(post => {
        console.log(post)
        return <div
            className='card'
            style={{ width: '30%', marginBottom: '20px' }}
            key={post.id}
        >
            <div className='card-body'>
                <h3>{post.title}</h3>
                <CommentList comments={post.comments}></CommentList>
                <CommentCreate postId={post.id}></CommentCreate>
            </div>
        </div>
    });

    return <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderedPosts}
    </div>
}