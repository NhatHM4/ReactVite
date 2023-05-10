import { useState } from "react";
import Values from "values.js";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Form = ({ setColors }) => {
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidHexColor(color)){
        toast.error("Hex color is not exists")
        return;
    } 
    toast.success("Color generated!!")
    setColors(new Values(color).all(10));
  };
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  function isValidHexColor(color) {
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

    return hexRegex.test(color);
  }

  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form">
        <input type="color" value={color} onChange={handleColorChange} />
        <input
          type="text"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
          placeholder="#f15025"
        />
        <button
          className="btn"
          style={{ background: color }}
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
