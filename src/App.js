import React, {useState} from 'react';
import Form from "./components/Form";
import TweetList from "./components/TweetList";
import './App.css';


function App() {

  const [inputText, setInputText] = useState("");
  const [likes, setLikes] = useState(0);
  const [dislikes, setDisLikes] = useState(0);
const [tweets, setTweets] = useState([]);
const [edits, setEdits] = useState(null);

  
  return (
    
    <div className="App">
    <header>
<h1> Tiny Twitter</h1>
</header>
<Form 
inputText={inputText} 
tweets={tweets} 
setTweets={setTweets} 
setInputText={setInputText} 
likes={likes} 
setLikes={setLikes} 
dislikes={dislikes} 
setDisLikes={setDisLikes} 
edits={edits}
setEdits={setEdits}


/>
< TweetList
tweets={tweets} 
setTweets={setTweets} 
likes={likes} 
setLikes={setLikes} 
dislikes={dislikes} 
setDisLikes={setDisLikes} 
setEdits={setEdits}

 />
    </div>
    
  );
}

export default App;
