import "./App.css";
import Header from "./Components/Header/Header";
import DisplayInfo from "./Components/DisplayInfo/DisplayInfo";
import { useEffect, useState } from "react";

// Main app component
function App() {
  // Setting People State
  const [people, setPeople] = useState([]);

  // Fetching data
  useEffect(() => {
    fetch("./data.JSON")
    .then(res => res.json())
    .then(data => setPeople(data))
  },[]);

  return (
    <div>
      <Header />
      <DisplayInfo people={people}></DisplayInfo>
    </div>
  );
}

export default App;
