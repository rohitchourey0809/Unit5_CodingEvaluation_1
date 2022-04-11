// import logo from './logo.svg';
import './App.jsx';
import {React} from "react";
function App() {
  var [Score,setCounter] =React.useState(76)
  var [counterwicket,setCounters] =React.useState(2)
  var [counterball,setCounterss] =React.useState(50)

  const scorechange = (value) =>{
    setCounter(Score+value)
  }

   const Wicketchange = (value) =>{
    setCounters(counterwicket+value)
  }

    const ballchange = (value) =>{
    setCounterss(counterball+value)
  }



  


  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            CounterScore:{
              // show "score" her
              // counter
              Score
               }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
CounterWicket{
              // show wicket here
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        {Score}
        <button className="addScore1"
        onclick = {() =>{
          scorechange(1)
        }}>Add 1</button>
        <button className="addScore4"
        onclick = {() =>{
          scorechange(4)
        }}>Add 4</button>
        <button className="addScore6"
        onclick = {() =>{
          scorechange(6)
        }}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        {Wicketchange}
        <button
        onclick = {() =>{
          Wicketchange(1)
        }}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        {ballchange}
        <button
        onclick = {() =>{
          ballchange(1)
        }}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      {Score > 100 ? "India Won" :"Not Won" }


    </div>
  );
}

export default App;



