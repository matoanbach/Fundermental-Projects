import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import {useGlobalContext} from "./context";

const App = () => {
  const {isSidebarOpen, isModalOpen} = useGlobalContext();
  console.log(isSidebarOpen, isModalOpen)
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
};
export default App;
