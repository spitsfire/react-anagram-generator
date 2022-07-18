import React, { useState } from "react";

const WordForm = ({ generateAnagrams }) => {
  const [word, setWord] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    generateAnagrams(word);
    setWord("");
  };

  return (
    <form onSubmit={onSubmitHandler} className='container' id='form'>
      <input
        type='text'
        name='word'
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button type='submit'>Check</button>
    </form>
  );
};

export default WordForm;
