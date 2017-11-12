import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RedditPost from './RedditPost';
import moment from 'moment';
import _ from 'lodash'
import firebase from 'firebase';
import AddPost from './AddPost'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      redditPosts: {}
    }

    firebase.database().ref('posts')
      .on('value', (snapshot) => {
        this.setState({redditPosts: snapshot.val()})
      })
  }

  render() {
    return (
      <div className="App">
        <AddPost onAdd={(redditPost) => {
            const newRedditPost = {...redditPost, comments: 5, submissionTime: moment().format()}
            firebase.database().ref('posts').push(newRedditPost)
          }}
        />
        {_.map(this.state.redditPosts, redditPost => {
          return <RedditPost
            key={redditPost.title}
            title={redditPost.title}
            comments={redditPost.comments}
            submissionTime={redditPost.submissionTime}
          />
        })}
      </div>
    );
  }
}

export default App;