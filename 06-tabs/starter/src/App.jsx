import { useEffect, useState } from "react";
import CompanyName from "./CompanyName";
import JobCenter from "./JobCenter";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [companys, setCompanys] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [companyNumber, setCompanyNumber] = useState(0);
  useEffect(() => {
    fecthData();
  }, []);

  const fecthData = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Loi fecth data");
      }
      const data = await res.json();
      setCompanys(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(true);
  };

  const handleCLick=(index) =>{
    setCompanyNumber(index)
  }

  return (
    <div className="container jobs-center">
      <div className="column1">
        <CompanyName companys={companys} handleCLick={handleCLick}/>
      </div>
      <div className="column2">
        {companys.length !== 0 && <JobCenter company={companys[companyNumber]} />}
      </div>
    </div>
  );
};
export default App;
