import "./App.css";
import { Persons } from "./components/Persons";
import { useState } from "react";

function App() {
  const [ persons, setPersons ] = useState([
    {
      id: 1,
      name: "rogelio menco",
      role: "fonntend",
      img: "https://bootdey.com/img/Content/avatar/avatar4.png",
    },
    {
      id: 2,
      name: "miguel",
      role: "fonntend",
      img: "https://bootdey.com/img/Content/avatar/avatar1.png",
    },
    {
      id: 3,
      name: "juancho",
      role: "futbolista",
      img: "https://bootdey.com/img/Content/avatar/avatar6.png",
    },
  ]);

  return (
    <div className="App">
      <div className="container">
        <Persons persons={persons} setPersons={setPersons} />
      </div>
    </div>
  );
}

export default App;
