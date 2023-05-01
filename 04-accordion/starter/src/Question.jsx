import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
const Question = ({ question }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="form-label">
        {question.title}
        <span onClick={()=>{setIsShow(!isShow)}}>
          <AiOutlinePlusCircle />
        </span>
      </div>
      {isShow && <div className="form-textarea">{question.info}</div>}
    </>
  );
};

export default Question;
