import React from 'react';

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.props.onChange(event);
    }
    handleSubmit(event) {
        this.props.onSubmit(event);
    }
    render(){

        return (
            <form onSubmit={this.handleSubmit}>
            <textarea
                name="currentContent"
                value={this.props.currentContent}
                onChange={this.handleChange}
            />
            <div><input type="submit" value="Post" /></div>
            </form>
        )
    }
}

export default Form;