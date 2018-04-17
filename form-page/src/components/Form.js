import React from 'react';

class Form extends React.Component{

    handleChange(event) {
        this.props.handleChange(event);
    }
    handleSubmit(event) {
        this.props.handleSubmit(event);
    }
    render(){

        return (
            <Form onSubmit={this.props.handleSubmit}>
            <textarea
                name="currentPost"
                value={this.props.currentContent}
                onChange={this.props.handleChange}
            />
            <div><input type="submit" value="Post" /></div>
            </Form>
        )
    }
}

export default Form;