import React, {useEffect} from 'react';


const Form =({ setInputText, tweets, dislikes, setDisLikes, likes, setLikes, setTweets, inputText, edits, setEdits}) => {
	const inputTextHandler = (e) => {
		console.log(e.target.value);
		setInputText(e.target.value);
	};
	const updateTweet = (text, id, likes, dislikes) =>{
		const newTweet = tweets.map((tweet) => tweet.id === id ? {text, id, likes, dislikes} : tweet
		);
		setTweets(newTweet);
		setEdits("");
	}
	useEffect(() => {
		if(edits){
			setInputText(edits.text)
		}else{
			setInputText("");

		}
	}, [setInputText, edits]);

	const submitTweet = (e) =>{
		e.preventDefault(); //prevent refreshing of the page
		if(!edits){
			setTweets([{text:inputText, id: Math.random() *1000, likes:0, dislikes:0}, ...tweets]);
			setInputText("");//reset to empty
		}else{
			updateTweet(inputText, edits.id, edits.likes, edits.dislikes)
		}

	};
    return(

<form>
      <input value={inputText} onChange={inputTextHandler} placeholder="write a tweet"type="text" className="__input" />
      <button  onClick={submitTweet} type="submit">{edits ? "Done" : "Tweet"}</button>
    </form>

    );
};

export default Form;