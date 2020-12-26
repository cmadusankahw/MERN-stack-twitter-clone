import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import Tweet from './comps/Tweet';
import Counter from './comps/Counter';


function App() {

  // intializing empty array as state to store recieving tweets
  const [data, setData] = useState([])

  // function to fetch Data from twitter API
  const fetchData = async () => {
    try {
      const response = await axios.get('https://coursera-twitter-api.herokuapp.com/tweets')
      // soring recieved data in statement
      setData(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  // call fetchData at app startup/ reload using useEffect hook
  useEffect( () => {
    console.log('function reached!') // test
    fetchData()
  })

  // Note: {....tweet} : this will take all properties of the tweet object and pass them to the component
  return (
    <div className="App-content">
        <h1 className="App-title">Twitter Clone</h1>
        <hr />
       {data.map(tweet => <Tweet key={tweet.id} {...tweet}/>)}  
        <br/>
        <div className="App-counter">
          <Counter /> 
        </div>
        <br />
    </div>
  );
}

export default App;
