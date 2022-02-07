import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";


const Chart = props => {
    const dataPOintValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const TotalMaximum = Math.max(...dataPOintValues);


    return <div className="chart">
        {props.dataPoints.map(dataPoint =>
            <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={TotalMaximum}
                label={dataPoint.label} />)}
    </div>

};

export default Chart;