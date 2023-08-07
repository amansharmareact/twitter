import React, { useContext } from 'react';
import NoteContext from './noteContext';


const TweetContext = (props) => {

  const tweetData = {
    "name": 'Narendra Modi',
    "username": "@narendramodi",
    "date" :'30-July',
   
  };

  return (
    <NoteContext.Provider value={tweetData}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default TweetContext;

