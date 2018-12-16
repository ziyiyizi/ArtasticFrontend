import { Chart, Axis, Legend, Tooltip, Geom } from 'bizcharts';
import React from 'react'



function Chart1(props){

const scale = {
  clickmonth: {alias: 'Month',},
  clicknum: {alias: 'Views',},
};

const{datum}=props;
console.log(datum);

return( <Chart height={400} data={datum} scale={scale} forceFit>
    <Axis title name="clickmonth" />
    <Axis title name="clicknum" />
    <Legend />
    <Tooltip crosshairs={{ type: 'rect' }} />
    <Geom type="interval" position="clickmonth*clicknum" color="clickmonth" />
  </Chart>);
}

export default Chart1;