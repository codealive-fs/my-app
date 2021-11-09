import React, { useState } from 'react';
import CreateTweet from './components/CreateTweet';
import TweetList from './components/TweetList';

function App() {
  const [name, setName] = useState("Dev Ed");
 
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  return (
   <div>
     <h1>Hello react</h1>
     <CreateTweet 
          textInput={textInput}
          setTextInput={setTextInput}
          tweets={tweets}
          setTweets={setTweets}
          />
     <TweetList name={name} tweets={tweets} /> 
   </div>
 )
}


export default App;