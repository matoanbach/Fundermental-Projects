import ColorList from "../ColorList";
import Form from "./Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));
  function addColor(color) {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
      toast.success("awesome");
      console.log(colors);
    } catch (error) {
      toast.error("error message");
    }
  }
  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
