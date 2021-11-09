import React from 'react'

const CreateTweet = ({ tweets, setTweets, textInput, setTextInput }) => {

    // State
   
    //Functions
    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    };
    const submitTweetHandler = (e) => {
        e.preventDefault();
        setTweets([...tweets,  textInput])
    }
    
    return (
        <>
            <form onSubmit={submitTweetHandler}>
                <textarea 
                    value={textInput}
                    onChange={userInputHandler}
                    cols="30" 
                    rows="10">
                </textarea>
                <button>Submit</button>
            </form>
        </>
    )
}

export default CreateTweet;