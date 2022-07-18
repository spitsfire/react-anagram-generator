import React, { useState } from "react";
import WordForm from "./WordForm";
import AnagramList from "./AnagramList";
import anagrams from "english-anagrams";

const Main = () => {
  const [anagramList, setAnagramList] = useState([]);

  const generateAnagrams = (word) => {
    const result = anagrams(word);
    if (result) {
      setAnagramList(result);
    }
  };

  return (
    <div className='container' id='main'>
      <WordForm generateAnagrams={generateAnagrams} />
      <AnagramList anagramList={anagramList} />
    </div>
  );
};

export default Main;
