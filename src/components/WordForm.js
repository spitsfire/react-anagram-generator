import React from "react";

const WordForm = () => {
  return (
    <form className='container' id='form'>
      <input type='text' name='word' />
      <button type='submit'>Check</button>
    </form>
  );
};

export default WordForm;
