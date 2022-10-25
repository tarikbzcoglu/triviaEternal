import React from 'react'
import Confetti from 'react-confetti'

export default function FinalPage({
  score,
}) {
  
  const handlePlayagain = () => {
  window.location.reload();
  }
  
  return (
    <div>
      <Confetti
       width={window.innerWidth - 10 || 300}
       height={window.innerHeight -10 || 200}
      />
      <h1 className = "end-text">Congratulations!, Your score is: {score}</h1>
      <button onClick={handlePlayagain} className = "button">Play Again</button>
      </div>
  )
}