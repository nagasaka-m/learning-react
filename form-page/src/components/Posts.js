import React from 'react';
import Post from './Post';

class Posts extends React.Component{
    createPosts(){
        return this.props.posts.reverse().map(item =>
            <Post
                key={item.id}
                post={item}
            />
        );
    }

    render(){
        return (
            <div>
                {this.createPosts()}
            </div>
        )
    }
}

export default Posts;