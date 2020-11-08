import React, { useState } from "react";
// import covidData from "./Chart";
import { Line } from "react-chartjs-2";

function Note(props) {
  // const [chartData, setChartData] = useState({});

  // function updateCovidData() {
  //   setChartData(covidData);
  // }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div>
        {console.log("props.covidData is :")}
        {console.log(props.covidData)}
        <Line data={props.covidData} />
      </div>
      <button
        className="note"
        onClick={/*console.log(props)*/ () => props.onDelete(props.id)}
      >
        -
      </button>
    </div>
  );
}

export default Note;
