import { useState } from 'react';
import questions from './data'
import Question from './Question';

const App = () => {
  console.log(questions)
  const [question, setQuestion] = useState(questions)
  return <div className='form'>
      {
        question.length !==0 &&
        question.map((item)=>{
          return(
            <Question question ={item}/>
          )
          
        })
      }
  </div>
};
export default App;
