import React from 'react';
import '../App.css';
import {Card} from 'react-bootstrap';
import Rating from './Rating';

class PreviousCourse extends React.Component {
  constructor(props){
    super(props);
  }
    render() {
        return (
          
            <Card style={{width: '100%', marginTop: '5px', marginBottom: '5px', backgroundColor: '#F7B7B7'}}>
              <Card.Body>
                <Card.Title align={"center"}>{this.props.data.name}</Card.Title>
                <Card.Subtitle align={"center"} className="mb-2 text-muted">{this.props.data.number}</Card.Subtitle>
                <Card.Text></Card.Text>
              </Card.Body>
                <tr>
                  <Rating keywords={this.props.keywords} coursekey={this.props.coursekey} 
                          setRatedCourses={(value, coursekey, extraWords) => this.props.setRatedCourses(value, coursekey, extraWords)} 
                          rate={1}></Rating>
                  <Rating keywords={this.props.keywords} coursekey={this.props.coursekey} 
                            setRatedCourses={(value, coursekey, extraWords) => this.props.setRatedCourses(value, coursekey, extraWords)} 
                            rate={2}></Rating>
                  <Rating keywords={this.props.keywords} coursekey={this.props.coursekey} 
                            setRatedCourses={(value, coursekey, extraWords) => this.props.setRatedCourses(value, coursekey, extraWords)} 
                            rate={3}></Rating>
                  <Rating keywords={this.props.keywords} coursekey={this.props.coursekey} 
                            setRatedCourses={(value, coursekey, extraWords) => this.props.setRatedCourses(value, coursekey, extraWords)} 
                            rate={4}></Rating>
                  <Rating keywords={this.props.keywords} coursekey={this.props.coursekey} 
                            setRatedCourses={(value, coursekey, extraWords) => this.props.setRatedCourses(value, coursekey, extraWords)} 
                            rate={5}></Rating>
                </tr>
              </Card>
         
        )
      }
}

export default PreviousCourse
