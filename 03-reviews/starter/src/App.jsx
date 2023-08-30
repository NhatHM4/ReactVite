import Review from "./Review";
import data from "./data";
import { useState } from "react";
const App = () => {
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    if (index == data.length - 1) {
      return;
    }
    setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index == 0) {
      return;
    }
    setIndex(index - 1);
  };
  const handleSuprise = ()=>{
    let random = index;
    while (index == random){
      random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    }
    setIndex(random(0,data.length))
  }
  return (
    <div className="form">
      <Review obj={data[index]} />
      <div>
        <button className="btn prev-btn" onClick={handlePrev}>
          Prev
        </button>
        <button
          className="btn next-btn"
          onClick={() => {
            handleNext();
          }}
        >
          Next
        </button>
        <button className="btn" onClick={handleSuprise}>Suprise</button>
      </div>
    </div>
  );
};
export default App;
