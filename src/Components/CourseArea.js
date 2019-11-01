import React from 'react';
import '../App.css';
import Course from './Course';

class CourseArea extends React.Component {
  
  getCourses(x) {
    let courses = [];

    for(const course of Object.entries(this.props.data)) {
      if (x % 2 == 0) {
        courses.push (
          <Course key={course[0]} data={course[1]} setCartCourses={(data) => this.props.setCartCourses(data)}/>
        )
      }
      x++;
    }
   
    return courses;
  }

  render() {
    return (

      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6" >{this.getCourses(2)}</div>
          <div class="col-lg-6" >{this.getCourses(1)}</div>
        </div>
      </div>
      
    )
  }
}

export default CourseArea;
