import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import BookStore from "./BookStore";

function App() {
  const actors = ['sakib', 'shoriful raj', 'jasim', 'rubel', 'salman shah'];
  const singers = [
    {id:1, name: 'mahfujur rahman', age: 68},
    {id:2,name: 'eva rahman', age: 38},
    {id:3,name: 'shuvro dev', age: 58},
    {id:4,name: 'pritom', age: 28}
  ]

  const books = [
    {id:1, name: 'physiics', price:100},
    {id:2, name: 'Math', price:200},
    {id:3, name: 'chemistry', price:300},
    {id:4, name: 'biology', price:400},
  ]

  return (
    <>
      <h3>Vite + React</h3>
      <BookStore books={books}></BookStore>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      <Actor name= {'Bappa Raz'}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Core Concept" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="2300"></Device>
      <Device name="Mobile" price="1000"></Device>
      <Device name="Watch" price="1200"></Device>
      <Person></Person>
      <Studdent grade="7" score="99"></Studdent>
      <Studdent grade={8} score="96"></Studdent>
      <Studdent></Studdent>
      <Developer></Developer> */}
    </>
  );
}

function Device(props) {
  return (
    <h2>
      This Device: {props.name} price: {props.price}
    </h2>
  );
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: "sakib", age: 21 };
  return (
    <h3>
      I am a {person.name} with age: {age + money}
    </h3>
  );
}

//destructuring object
// const {grade, score} = {grade:'7', score:'99'}
function Studdent({ grade = 1, score = 0 }) {
  return (
    <div className="student">
      <h3>This is a statement</h3>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "20px",
  };
  return (
    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>Coding: </p>
    </div>
  );
}

export default App;

