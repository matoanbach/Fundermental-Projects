import { useState, useEffect } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error)
      setIsLoading(false);
    }
    return;
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <h1>Loading....</h1>
    );
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <JobInfo jobs={jobs} currentIndex={currentIndex} />
    </section>
  );
};
export default App;
