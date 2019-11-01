import React from 'react';
import '../App.css';
import {Card, Button} from 'react-bootstrap';

class RecommendedCourse extends React.Component {

  returnCourse(data) {
    let carts = {}
    console.log("clicked for all courses ")
    for(const pair of Object.entries(data.sections)) {
      //console.log(pair)
     Object.assign(carts, data);
    }
    //console.log(carts)
    return carts
  }
    render() {
        return (
          
            <Card style={{width: '100%', marginTop: '5px', marginBottom: '5px', backgroundColor: '#F7B7B7'}}>
              <Card.Body>
                <Card.Title align={"center"}>{this.props.data.name}</Card.Title>
                <Card.Subtitle align={"center"} className="mb-2 text-muted">{this.props.data.number}</Card.Subtitle>
                <Card.Text></Card.Text>
                <Button align={"right"} onClick={() => this.props.setCartCourses(this.returnCourse(this.props.data))}>Add all to Cart</Button>
              </Card.Body>
                
              </Card>
         
        )
      }
}

export default RecommendedCourse
