import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts';
import Form from './components/Form';
import Header from './components/Header';
import firebase from 'firebase';
import _ from 'lodash';

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
      posts: [],
      currentContent: '',
      id: 1,
    }

  }
  componentWillMount() {
    firebase.initializeApp({  
      // Initialize Firebase
        apiKey: "AIzaSyD1dLuKPuVPCLdOPrwlfBoPMWZomXmUaGc",
        authDomain: "blog-post-8113e.firebaseapp.com",
        databaseURL: "https://blog-post-8113e.firebaseio.com",
        projectId: "blog-post-8113e",
        storageBucket: "blog-post-8113e.appspot.com",
        messagingSenderId: "514646431420"

    })
  }

  
  componentDidMount(){
 //create database
    firebase.database().ref('/posts')
    //get data from database as an js object
      .on('value', snapshot => {
          const fbstore = snapshot.val();

        const store = _.map(fbstore, (value, id) => {
          return {
            id: id,
            date: value.date,
            content: value.content,
          };
        });
        //setstate
        this.setState({
          posts: store.reverse(),
        });
      });

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

   
    const newInput = {
      id: this.state.id ,
      date: getCurrentDate(),
      content: this.state.currentContent,
    };

    firebase.database().ref('/posts').push(newInput, response => response);
  
    this.setState({
      currentContent: '',
      //id: (this.state.id + 1),
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
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
