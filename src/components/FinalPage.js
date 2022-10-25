import React from 'react'

export default function FinalPage({
  score,
}) {
  
  const handlePlayagain = () => {
  window.location.reload();
  }
  
  return (
    <div>
      <h1 className = "end-text">Congratulations!, Your score is: {score}</h1>
      <button onClick={handlePlayagain} className = "button">Play Again</button>
      </div>
  )
}