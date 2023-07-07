import { useState } from "react";
import Form from "./Form";
import Values from "values.js";
import ColorList from "./ColorList";
import { ToastContainer, toast } from "react-toastify";


const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  function toggleColor(color) {
    
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }

  }

  return (
    <main>
      <Form toggleColor={toggleColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center"/>
    </main>
  );
};
export default App;
