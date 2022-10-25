import React, {useState, useEffect} from "react"
import Axios from 'axios'
import "./App.css";
import QuestionsPage from './components/QuestionsPage'
import FinalPage from './components/FinalPage'

const url = "https://opentdb.com/api.php?amount=10&difficulty=easy";

function App() {
  
  const [quiz, setQuiz] = useState([])
  const [currIndex, setCurrIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showAnswers, setShowAnswers] = useState(false)

  
  
  useEffect(() => {
    Axios.get(url)
    .then(res => res.data)
    .then(data => {
      const questions = data.results.map((question) => ({
        ...question, 
        answers: [question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5)
      }))
      
      setQuiz(questions)
    })
  },[])
  
  const handleClick = (answer) => {
    if (!showAnswers) {
      if (answer === quiz[currIndex].correct_answer) {
        setScore((score) => (score += 10))
      }
      setShowAnswers(true)
    }
  }
  
  const handleNext = () => {
    setCurrIndex(currIndex + 1)
    setShowAnswers(false)
  }
  
  return ( quiz.length > 0 ? (  
    <div className = "container">
      {currIndex >= quiz.length ? (
        <FinalPage
        score={score}
         />) : (  
          <QuestionsPage 
          score={score}
          currIndex= {currIndex}
          showAnswers={showAnswers}
          handleNext={handleNext}  
          data ={ quiz[currIndex]}
          handleClick= {handleClick}
          />)}
    </div>
  ) 
  : <div className = "container"> <div class="lds-hourglass"><div></div></div> </div>
  
  )
}

export default App;
