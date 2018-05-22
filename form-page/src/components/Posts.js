import React from 'react';
import Post from './Post';

class Posts extends React.Component{
    createPosts(){
        return this.props.posts.map(item =>
            <Post
                key={item.id}
                post={item}
            />
        );
    }

    shouldComponentUpdate(nextProps) {
        return (nextProps.posts.length !== this.props.posts.length);
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