import React, {useState, useEffect} from 'react'

export default function QuestionsPage({handleClick, currIndex, score, showAnswers,handleNext, data : {question, correct_answer, answers}}) {
  
  return(
    <>
      <div className = "question">
        <h1 dangerouslySetInnerHTML = {{__html:question}} />
        <p>Question {currIndex + 1}/10</p>
        <p className= "score">Score: {score}</p>
      </div>
      <div className = "button-overall">
      {answers.map(function (answer, index) {
        const checkClass = showAnswers ? (
          answer === correct_answer ? "buttonTrue" : "buttonFalse"
        ) : ""
        return (
          <button key={index} onClick={() => handleClick(answer)} className = {`button ${checkClass}`} dangerouslySetInnerHTML = {{__html:answer}} />
        )
      })}
        
      </div>
      {showAnswers && <button onClick = {handleNext} className = "next-button">Next question</button>}
    </>
  )
}