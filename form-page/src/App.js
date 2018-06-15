import React, { Component } from 'react';
import { Map, List, fromJS } from 'immutable';
import './App.css';
import Posts from './components/Posts';
import Form from './components/Form';
import Header from './components/Header';


function getCurrentDate(){
  var today = new Date();
  var d = today.getDate();
  var m = today.getMonth() + 1;
  var y = today.getFullYear();
  var h = today.getHours();
  var min = today.getMinutes();
  return y + ' ' + m + '.' + d + ' ' + h + ':' + min;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {

      posts: List([Map({
        id: 1,
        content: "heyyyy",
        date: getCurrentDate()
      })]),
      currentContent: '',
      id: 1,
    }

  }
  componentWillMount() {
    
  }

  
  componentDidMount(){
 

  }

  
  shouldComponentUpdate(nextStates) {
    return (nextStates.currentContent !== this.state.currentContent
         || nextStates.posts.length !== this.state.posts.length);
  }

  handleChange(event) {
    
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(event) {
    if( this.state.currentContent !== ''){

   const newInput = Map({
     id: this.state.id + 1,
     content: this.state.currentContent,
     date: getCurrentDate()
   });

    this.setState({
      currentContent: '',
      id: (this.state.id + 1),
      posts: this.state.posts.push(newInput)
    });
  }else{
    alert("write a post");
  }
    event.preventDefault();
  }

  render() {
    
    return (
      <div className="App">
        <Header />
        <Form 
          currentContent={this.state.currentContent}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
                <p>{this.state.posts.length} </p>

        <Posts posts={this.state.posts.toJS()} />

      </div>
    );
  }
}

export default App;
