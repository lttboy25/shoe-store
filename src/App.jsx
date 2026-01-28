import { useState } from "react";
import Popup from "./components/common/Popup";
import cartIcon from "./assets/icon/shopping-cart.png";
import "./App.css"
import Rating from "./components/common/Rating";
function App() {
  const [count, setCount] = useState(1);

  return (
    <>
    <br />
    <Popup></Popup>
    <Rating></Rating>
    </>
  );
}

export default App;
