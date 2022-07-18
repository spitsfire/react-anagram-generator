import React from "react";
import Anagram from "./Anagram";

const AnagramList = ({ anagramList }) => {
  return (
    <div className='container' id='anagram-list'>
      {anagramList
        ? anagramList.map((anagram) => <Anagram word={anagram} />)
        : null}
    </div>
  );
};

export default AnagramList;
