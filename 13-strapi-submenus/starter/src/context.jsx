
import { useContext, createContext, useState } from "react";

const MyApp = createContext();

function AppContext({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState();
  const [pageId, setPageId] = useState(null);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }
  const aString = "Hello from the globe";
  return <MyApp.Provider value={{pageId, isSidebarOpen, openSidebar, closeSidebar, setPageId }}>{children}</MyApp.Provider>;
}

export default AppContext;

export const useGlobalContext = () => {
  return useContext(MyApp);
};
