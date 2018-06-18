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
console.log("formmmm")
        return (
            <div className="row">
                <div className='input-field'>
                    <form onSubmit={this.handleSubmit} className="col s10">
                         <textarea
                            className="materialize-textarea validate"
                            name="currentContent"
                            value={this.props.currentContent}
                            onChange={this.handleChange}
                        />
                        <div className="input-field col s3">
                            <button className="btn-large waves-effect"
                                type="submit" name="Post">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;