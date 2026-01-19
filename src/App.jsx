import { useState } from "react";
import Header from "./components/Header";
import ColorGrid from "./components/ColorGrid";

function App() {
  const [colors, setColors] = useState([]);
  const [currentColor, setCurrentColor] = useState("#1258e6");

  function generateColor() {
    const randomColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);

    setColors((prev) => [...prev, randomColor]);
    setCurrentColor(randomColor);
  }

  return (
    <div
      className="min-h-screen"
      // style={{ backgroundColor: currentColor, transition: "background-color 0.5s" }}
      
    >
      <Header generateColor={generateColor} />
      <ColorGrid colors={colors} />
    </div>
  );
}

export default App;
