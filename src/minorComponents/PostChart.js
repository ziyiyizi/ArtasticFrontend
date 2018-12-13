import { Chart, Axis, Legend, Tooltip, Geom,  G2,Coord,Label,View,Guide,Shape,Facet, Util } from 'bizcharts';
import React, { Component } from 'react';
import { getData } from '../utils/request';
import { Row } from 'antd';
import DataSet from "@antv/data-set";
import Chart1 from './Chart1';
import Chart2 from './Chart2'
import {Alert}from 'react-bootstrap'

class PostChart extends Component{
  state={
    chartdata:null,
    chart1:undefined,
    chart2:undefined,
}
constructor(props){
    super(props);
    console.log('current artworkId : '+window.location.pathname.substr(12))
    getData('/getpostchart',window.location.pathname).then(data => {
        if (!data.error) {
          console.log(data.chartdata.data1)
          this.setState({chart1:<Chart1 datum={data.chartdata.data1}/>,
            chart2:<Chart2 datum={data.chartdata.data2}/>,
          })

        }
})

}







render(){




return(
  <div>
      <br/>
<Alert key='1' variant='success'>
    Click Volumn
  </Alert>
  <br/>
  <Row>
  
   {this.state.chart1}
  </Row>
  <br/>
  <Alert key='2' variant='success'>
    Gender Variance
  </Alert>
  <br/>
  <Row>
  {this.state.chart2}
  </Row>
  </div>
)



}
}

export default PostChart;