import { useState } from "react";

const CompanyName = ({ companys, handleCLick }) => {
  const [activeButton, setActiveButton] = useState(null);
  return (
    <div className="btn-container">
      {companys.map((company, index) => {
        return (
          <button
            className={`job-btn ${activeButton===index ? "active-btn" : ""}`}
            key={company.id}
            onClick={() => {
              handleCLick(index);
              setActiveButton(index);
            }}
          >
            {company.company}
          </button>
        );
      })}
    </div>
  );
};

export default CompanyName;
