import React from "react";
import WordForm from "./WordForm";
import AnagramList from "./AnagramList";

const Main = () => {
  return (
    <div className='container' id='main'>
      <WordForm />
      <AnagramList />
    </div>
  );
};

export default Main;
