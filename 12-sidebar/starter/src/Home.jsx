import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";

function Home() {
  const { openSidebar, openModal } = useGlobalContext();
  console.log(openSidebar);
  return <main>
    <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars/>
    </button>
    <button onClick={openModal} className="btn"> SHOW MODAL</button>
  </main>;
}

export default Home;
