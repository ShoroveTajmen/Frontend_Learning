/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import "./Home.css";
import { useState } from "react";
const Home = () => {
  const [allActors, setAllactors] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllactors(data));
  }, []);

  //for showingg actor name
  const handleSelectActor = (actor) => {
    const isExit = selectedActors.find((item) => item.id === actor.id);
    let count = actor.salary;
    if (isExit) {
      return alert("Already booked");
    } else {
      selectedActors.forEach((item) => (count = count + item.salary));
    }
    console.log(count);
    setSelectedActors([...selectedActors, actor]);
  };
  console.log(selectedActors);

  return (
    <div className="container">
      <div className="home-container">
        <div className="card-container">
          {allActors.map((actor) => (
            <div key={actor.id} className="card">
              <div className="card-img">
                <img className="photo" src={actor.image} alt="" />
              </div>
              <h2>{actor.name}</h2>
              <p>
                <small>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupti, quis?
                </small>
              </p>
              <div className="info">
                <p>Salary:{actor.salary}$</p>
                <p>{actor.role}</p>
              </div>
              <button
                onClick={() => handleSelectActor(actor)}
                className="card-btn"
              >
                Select
              </button>
            </div>
          ))}
        </div>
        <div className="cart">
          <Cart selectedActors={selectedActors}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
