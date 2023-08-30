import { useState } from "react";
const Item = ({ item,handleDelete }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <p className={`${isChecked ? "testclass":""}`}>{item.name}</p>
      <button className="btn" onClick={()=>{handleDelete(item.id)}}>Delete</button>
    </div>
  );
};

export default Item
