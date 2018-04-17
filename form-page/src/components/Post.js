import React from 'react';

const Post = (props) => {
    return (
        <div>
            <h3>{props.post.id}</h3>
            <p>{props.post.content}</p>
        </div>
    )
}
export default Post;