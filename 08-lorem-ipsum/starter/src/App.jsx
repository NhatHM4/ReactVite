import { useState } from "react";
import text from "./data";
const App = () => {
  const [texts, setTexts] = useState([])
  const [index, setIndex] = useState(0);
  const handleSubmit = () => {
    
    const textsClone = [...text];
    setTexts([...textsClone.splice(0,index)])
    // console.log(text.length)
  };
  const handleChange = (event) =>{
    
    if (event.target.value<=text.length){
      console.log(event.target.value)
      setIndex(event.target.value)
    }
    
  }
  // console.log(text);
  return (
    <div className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <div className="lorem-form">
        <span className="label">Paragraphs</span>
        <input
        min={0}
          type="number"
          className="input"
          name="index"
          value={index}
          onChange={handleChange}
        ></input>
        <button className="btn" onClick={handleSubmit}>Generate</button>
      </div>
      <div className="lorem-text">
        {
          texts.map((item, index)=>{
            return (
              <p key={index}>
                {item}
              </p>
            )
          })
        }
      </div>
    </div>
  );
};
export default App;
