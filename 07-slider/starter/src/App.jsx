import { useState,useEffect } from "react";
import { list } from "./data";
import Person from "./Person";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";

const App = () => {
  const [persons, setPersons] = useState(list);
  const [personNumber, setPersonNumber] = useState(0);

  useEffect(() => {
  const timer = setTimeout(()=>{
    if (personNumber < persons.length-1){
      setPersonNumber(personNumber+1)
    } else {
      setPersonNumber(0)
    }
   }, 3000)
   console.log(personNumber)

   return ()=>{
    clearTimeout(timer)
   }
  }, [personNumber]);

  const handlePrev = ()=>{
    if (personNumber === 0){
      setPersonNumber(persons.length-1)
    } else {
      setPersonNumber(personNumber-1)
    }
  }

  const handleNext= ()=>{
    if (personNumber === persons.length-1){
      setPersonNumber(0)
    } else {
      setPersonNumber(personNumber+1)
    }
  }
  console.log("intial")
  return (
    <main>
      <Person person={persons[personNumber]} />
      <button className="prev" onClick={()=>{handlePrev()}}>
        <BiSkipPrevious />
      </button>
      <button className="next" onClick={()=>{handleNext()}}>
        <BiSkipNext />
      </button>
    </main>
  );
};
export default App;
