import React from 'react';
import { HiThumbDown, HiThumbUp,HiTrash } from 'react-icons/hi';
import { FiEdit} from 'react-icons/fi';

const TweetList =({ tweets, setTweets, likes, setLikes, dislikes, setDisLikes,setEdits }) => {
 const deleteHandler =  ({id}) =>{
 setTweets(tweets.filter((tweet) => tweet.id !== id))
};
const likeHandler =  ({id}) =>{
 setTweets(tweets.map(tweet =>{
 	if(tweet.id === id) {
 		console.log(tweet.likes);
 		return{...tweet, likes:tweet.likes + 1}
 	}
 		else{
 			return tweet;
 		}
 	
 }));

};
const dislikeHandler =  ({id}) =>{
setTweets(tweets.map(tweet =>{
 	if(tweet.id === id) {
 		console.log(tweet.dislikes);
 		return{...tweet, dislikes:tweet.dislikes + 1}
 	}
 		else{
 			return tweet;
 		}
 	
 }));

};
		const editHandler =  ({id}) =>{
			const findTweet = tweets.find((tweet)=> tweet.id === id);
			setEdits(findTweet);

		};

    return(
		<div className="tweets-container">
		<ul className="tweet__list">
				{tweets.map((tweet) => (
		<div className="tweets">
		<li key={tweet.id}>
			<p className="text">{tweet.text} </p>
		<p> Likes: <span> {tweet.likes} 
    			<HiThumbUp onClick={() => likeHandler(tweet)} className="icon1" />
    			{tweet.dislikes} <HiThumbDown  onClick={() => dislikeHandler(tweet)} className="icon2"/></span></p>
    	<p>
    		<HiTrash onClick={() => deleteHandler(tweet)} className="trash-btn" className="icon3"/>
    			<FiEdit onClick={() => editHandler(tweet)} className="icon4" />
    	</p>
    </li>
</div> 
 
))}
</ul>
</div>

);
};

export default TweetList;