import React from 'react';

const Post = (props) => {
    console.log("post" + props.post.id);

    return (
        <div>
            <h4>{props.post.content}</h4>
            <p>{props.post.date}</p>
        </div>
    )
}
export default Post;