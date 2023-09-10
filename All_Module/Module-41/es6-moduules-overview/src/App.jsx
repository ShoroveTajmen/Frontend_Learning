import { useEffect, useState } from "react";
import "./App.css";
import Watch from "./components/Watch/Watch";

function App() {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data));

  }, [])



  // const watches = [
  //   {id: 1, name: 'Apple watch', price: 200},
  //   {id: 2, name: 'Sumsang watch', price: 200},
  //   {id: 1, name: 'MI watch', price: 200},
  // ]


  // const watches = [
  //   {
  //     id: 1,
  //     name: "TechGuru X1",
  //     price: 199.99,
  //   },
  //   {
  //     id: 2,
  //     name: "SmartLife Pro",
  //     price: 149.95,
  //   },
  //   {
  //     id: 3,
  //     name: "WatchMaster 2000",
  //     price: 249.99,
  //   },
  //   {
  //     id: 4,
  //     name: "EcoTech Wearable",
  //     price: 179.5,
  //   },
  //   {
  //     id: 5,
  //     name: "GizmoTime Elite",
  //     price: 219.0,
  //   },
  // ];

  return (
    <>
      <h1>Vite + React</h1>
      {watches.map((watch) => (
        <Watch key={watch.id} watch={watch}></Watch>
      ))}
    </>
  );
}

export default App;
