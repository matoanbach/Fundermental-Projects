const url = "https://course-api.com/react-tours-project";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchTour = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  function removeTour(id) {
    setTours((prevTours) => {
      return prevTours.filter((tour) => {
        return tour.id !== id;
      });
    });
  }
  useEffect(() => {
    fetchTour();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
