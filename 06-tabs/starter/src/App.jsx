import { useState, useEffect } from "react";
import JobInfo from "./Jobinfo";
import BtnContainer from "./BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);



  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  return (
    <section className="jobs-center">
      {/* button container */}
      <BtnContainer jobs={jobs} setCurrentItem={setCurrentItem} currentItem={currentItem}/>
      <JobInfo jobs={jobs} currentItem={currentItem}/>
      {/* job info */}
    </section>
  );
};
export default App;
