import React from 'react';


class Post extends React.Component{
    shouldComponentUpdate(nextProps) {
        //console.log("next" + nextProps.post.id + "previous" + this.props.post.id)
        return (nextProps.post.id !== this.props.post.id);
    }

    render(){
        console.log("post" + this.props.post.id);

        return (
            <div>
                <h4>{this.props.post.content}</h4>
                <p>{this.props.post.date}</p>
            </div>
        )
    }
}

export default Post;