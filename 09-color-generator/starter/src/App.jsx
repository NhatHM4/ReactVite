import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from 'values.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [colors,setColors] = useState(new Values('#f15025').all(10))
  // const [colorCode, setColorCode] = useState("#f15025")
  return <main>
    <Form  setColors={setColors}/>
    <ColorList colors={colors}/>
    <ToastContainer />
  </main>;
};
export default App;
