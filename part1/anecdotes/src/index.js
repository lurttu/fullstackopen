import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);

  const [points, setPoints] = useState(
    Array.apply(null, Array(anecdotes.length)).map(Number.prototype.valueOf, 0)
  );

  /* const points = Array.apply(null, Array(anecdotes.length)).map(
    Number.prototype.valueOf,
    0
  ); */

  console.log(points);

  const getRandomIntExclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const handleClickNext = () => {
    const select = getRandomIntExclusive(0, anecdotes.length);
    setSelected(select);
  };

  const handleClickVote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={handleClickVote}>vote</button>
      <button onClick={handleClickNext}>Next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[points.indexOf(Math.max(...points))]}</p>
      <p>has {Math.max(...points)} votes</p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
