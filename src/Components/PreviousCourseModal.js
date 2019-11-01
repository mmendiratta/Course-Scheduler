import React from 'react';
import '../App.css';
import PreviousCourse from './PreviousCourse';

class PreviousCourses extends React.Component{
  constructor(props){
    super(props);

  }
    getCourses(x) {
        let courses = [];
        for(const course of Object.entries(this.props.courses)) {
          for(const prev of Object.entries(this.props.previousCourses)) {
            for(let i = 0; i < prev[1].length; i++) {
              let keywords = [];
              if (x % 2 == 0) {

              
              //console.log(prev[1][i]);
              //console.log("in modal " + course[0]);
              for(let j = 0; j < course[1].keywords.length; j++) {
                keywords.push(course[1].keywords[j]);
              }
               if(course[0] === prev[1][i]) {
                  courses.push(
                    <PreviousCourse coursekey={course[0]} data={course[1]} keywords={keywords}
                          setRatedCourses={(value, coursekey, extraWords) => this.props.setRatedCourses(value, coursekey, extraWords)}
                        > </PreviousCourse>
                  )
               }
              }
              x++;
            }
          }
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


export default PreviousCourses