import { useState } from 'react';
import questions from './data'
import Question from './Question';

const App = () => {
  const [question, setQuestion] = useState(questions)
  return <div className='form'>
      {
        question.length !==0 &&
        question.map((item)=>{
          return(
            <Question question ={item} key={question.id}/>
          )
          
        })
      }
  </div>
};
export default App;
