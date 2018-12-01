import React,{Component} from 'react';
import {Button,Card} from 'react-bootstrap';

class PublishTool extends Component{
    render(){
        return (<Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Submit your Artwork!</Card.Title>
          <Card.Text>

          </Card.Text>
          <div id="submitDiv"></div>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Submit</Button>
        </Card.Body>
      </Card>);
    }
}

export default PublishTool;