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
    await new Promise(resolve => setTimeout(resolve, 3000)); // wait for 3 seconds
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
    setIsLoading(false);
  };

  const handleCLick=(index) =>{
    setCompanyNumber(index)
  }
  if (isLoading){
    return <div className="loading"></div>
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
