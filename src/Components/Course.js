import React from 'react';
import '../App.css';
import Sections from './Sections';
import Card from 'react-bootstrap/Card';
import { Button, Accordion, } from 'react-bootstrap';

class Course extends React.Component {
  constructor(props) {
    super(props);

    this.getSections = this.getSections.bind(this);
    this.getSubsections = this.getSubsections.bind(this);
    this.returnCourse = this.returnCourse.bind(this);
  }

  getSubsections(subsections) {
    let array = [];
    //console.log(subsections);
    for (const subs of Object.entries(subsections)) {
      array.push(
       
        <Accordion>
            <Card.Header align={"center"}>
                <Accordion.Toggle as={Button} variant="link" eventKey={0}>
                  {subs[0]}
                </Accordion.Toggle>
            </Card.Header>
            
            <Accordion.Collapse eventKey={0}>
                <Card.Body>
                    <ul> Location: {subs[1].location} </ul>
                    <ul> Days and Times: <Sections subsection={subs[1].time }></Sections></ul>
                </Card.Body>
            </Accordion.Collapse>
          </Accordion>
           
      );
      return array;
    }
  }

  getSections(data) {
    let array = [];
    for(const pair of Object.entries(data.sections)) {
     //console.log(pair)
        array.push(
          <React.Fragment>
            <Card.Header align={"center"}>
                <Accordion.Toggle as={Button} variant="link" eventKey={pair[0]}>
                  {pair[0]}
                </Accordion.Toggle>
            </Card.Header>
            
            <Accordion.Collapse eventKey={pair[0]}>
                <Card.Body>
                    <ul> Instructor: {pair[1].instructor} </ul>
                    <ul> Location: {pair[1].location} </ul>
                    <ul> Days and Times: <Sections subsection={pair[1].time}> </Sections> </ul>
                   {this.getSubsections(pair[1].subsections)}
                   </Card.Body>
            </Accordion.Collapse>
            </React.Fragment>
        )
      
    }
    
    return array;
  }

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
      <Accordion  defaultActiveKey="0" width= '70%'>
        <Card style={{width: '100%', marginTop: '5px', marginBottom: '5px', backgroundColor: '#F7B7B7'}}>
          <Card.Body>
            <Card.Title align={"center"}>{this.props.data.name}</Card.Title>
            <Card.Subtitle align={"center"} className="mb-2 text-muted">{this.props.data.number} - {this.getCredits()}</Card.Subtitle>
            <Card.Text>{this.props.data.description}</Card.Text>
            <Button align={"right"} onClick={() => this.props.setCartCourses(this.returnCourse(this.props.data))}>Add all to Cart</Button>
          </Card.Body>
            {this.getSections(this.props.data)}
          </Card>
      </Accordion>
    )
  }

  getCredits() {
    if(this.props.data.credits === 1)
      return '1 credit';
    else
      return this.props.data.credits + ' credits';
  }
}

export default Course;
