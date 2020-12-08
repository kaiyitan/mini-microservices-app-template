import React from 'react';
import PostCreat from './PostCreate';
import PostList from './PostList';

export default () => {
    return <div className='container'>
        <h1>Create Post</h1>
        <PostCreat></PostCreat>
        <h1> Posts </h1>
        <PostList></PostList>
    </div>;
};

