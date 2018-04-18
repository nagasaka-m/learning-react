import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      userinput: '',
      posts: [],
    currentContent: '',
    id: 1,
    }

  }
  handleChange(event) {
    
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();

    const newInput = {
      id: this.state.id,
      content: this.state.currentContent,
    }
    this.state.posts.push(newInput);
    this.setState({
      id: (this.state.id + 1),
      currentContent: ''
    });
   // this.setState(this.state);
  }

  render() {
    return (
      <div className="App">
        <Form 
          currentContent={this.state.currentContent}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
