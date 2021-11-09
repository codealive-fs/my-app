import React from 'react'

const Tweet = ({ name, tweet, tweets, setTweets }) => {
    const deleteTweet = () => {
        setTweets(tweets.filter((t) => t !== tweet));
    };
    return (
        <>
        <h2> {name} </h2>
        <h2>{tweet}</h2>
        <button onClick={deleteTweet}>Delete</button>
        <button>Like</button>
        </> 
    )
}

export default Tweet;