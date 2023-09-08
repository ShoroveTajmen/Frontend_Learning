import "./App.css";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";
import Counter from "./counter";

function App() {
  function handleClick() {
    alert("button clickkked");
  }
  const handleClickk2 = () => {
    alert("button click 2");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h3>React Core Concepts</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Clickk Me</button>
      <button onClick={handleClickk2}>Click2</button>
      <button
        onClick={() => {
          alert("third clickedd");
        }}
      >
        third
      </button>
      <button onClick={() => {
        addToFive(5)
      }}>Fouuru</button>
    </>
  );
}

export default App;
