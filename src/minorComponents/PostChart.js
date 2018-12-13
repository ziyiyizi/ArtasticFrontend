import { Chart, Axis, Legend, Tooltip, Geom,  G2,Coord,Label,View,Guide,Shape,Facet, Util } from 'bizcharts';
import React, { Component } from 'react';
import { getData } from '../utils/request';
import { Row } from 'antd';
import DataSet from "@antv/data-set";

class PostChart extends Component{
constructor(props){
    super(props);



    console.log('current artworkId : '+window.location.pathname.substr(12))

    getData('/getpostchart',window.location.pathname).then(data => {
        if (!data.error) {
          this.state.chartdata=data.chartdata;
        }
        
})

}

componentWillReceiveProps(nextProp){


    getData('/getpostchart',window.location.pathname.substr(12)).then(data => {
        if (!data.error) {
          this.setState({
            chartdata:data.chartdata,
          });
        }
})

}

state={
    chartdata:null,
}

render(){
  const { DataView } = DataSet;
  const { Html } = Guide;


const data1 = [
  { month: 'Jan.', count: 69 },
];

const scale1 = {
  month: {alias: 'Month',},
  count: {alias: 'Sales',},
};

const data = [
  {
    item: "boy",
    count: 40
  },
  {
    item: "girl",
    count: 21
  },

];

const dv = new DataView();
dv.source(data).transform({
  type: "percent",
  field: "count",
  dimension: "item",
  as: "percent"
});
const cols = {
  percent: {
    formatter: val => {
      val = val * 100 + "%";
      return val;
    }
  }
};


return(
  <div>
  <Row>
    <Chart height={400} data={data1} scale={scale1} forceFit>
    <Axis title name="month" />
    <Axis title name="count" />
    <Legend />
    <Tooltip crosshairs={{ type: 'rect' }} />
    <Geom type="interval" position="month*count" color="month" />
  </Chart>
  </Row>
  <br/>
  <Row>
  <Chart
          height={window.innerHeight}
          data={dv}
          scale={cols}
          padding={[80, 100, 80, 80]}
          forceFit
        >
          <Coord type={"theta"} radius={0.75} innerRadius={0.6} />
          <Axis name="percent" />
          <Legend
            position="right"
            offsetY={-window.innerHeight / 2 + 120}
            offsetX={-100}
          />
          <Tooltip
            showTitle={false}
            itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
          />
          <Guide>
            <Html
              position={["50%", "50%"]}
              html="<div style=&quot;color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;&quot;>主机<br><span style=&quot;color:#262626;font-size:2.5em&quot;>200</span>台</div>"
              alignX="middle"
              alignY="middle"
            />
          </Guide>
          <Geom
            type="intervalStack"
            position="percent"
            color="item"
            tooltip={[
              "item*percent",
              (item, percent) => {
                percent = percent * 100 + "%";
                return {
                  name: item,
                  value: percent
                };
              }
            ]}
            style={{
              lineWidth: 1,
              stroke: "#fff"
            }}
          >
            <Label
              content="percent"
              formatter={(val, item) => {
                return item.point.item + ": " + val;
              }}
            />
          </Geom>
        </Chart>
  </Row>
  </div>
)



}
}

export default PostChart;