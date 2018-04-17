import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userinput: '',
      posts: [
        {
          id: 1,
          content: 'hello'
        },
        {
          id: 2,
          content: 'wow'
        }

    ],
    currentContent: '',
    }

  }
  handleChange(event) {
    this.setState({currentContent: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <Form 
          currentContent={this.state.currentContent}
          handleChange={this.state.handleChange}
          handleSubmit={this.state.handleSubmit}
        />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
