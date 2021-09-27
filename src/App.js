import "./App.css";
import Header from "./Components/Header/Header";
import DisplayInfo from "./Components/DisplayInfo/DisplayInfo";
import { useEffect, useState } from "react";

function App() {
  const [people, setPeople] = useState([]);

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
