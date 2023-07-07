import { useState } from "react";
import Form from "./Form";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";

const getLocalStorage = () => {
  let list = localStorage.getItem("itemList");
  if (list) {
    list = JSON.parse(localStorage.getItem("itemList"));
  } else {
    list = [];
  }
  return list;
};

const setLocalStorage = (items) => {
  localStorage.setItem("itemList", JSON.stringify(items));
};

const existingList = getLocalStorage();
console.log(existingList);

const App = () => {
  const [items, setItems] = useState(existingList);

  function addItem(item) {
    const newItems = [...items, item];
    setLocalStorage(newItems);
    setItems(newItems);
    toast.success("item added to the list");
  }

  function editItem(id) {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      } else {
        return item;
      }
    });
    setItems(newItems);
    setLocalStorage(newItems);
  }

  function removeItem(id) {
    const newItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  }
  return (
    <section className="section-center">
      <ToastContainer />
      <Form addItem={addItem} />
      <Items items={items} editItem={editItem} removeItem={removeItem} />
    </section>
  );
};

export default App;
