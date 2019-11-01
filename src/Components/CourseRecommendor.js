import React from 'react';
import '../App.css';
import RecommendedCourse from './RecommendedCourse';

class CourseRecommendor extends React.Component{
  constructor(props){
    super(props);

  }
    getCourses(x) {
        let courses = [];
        let topfour = 0;

        //console.log(this.props.recommendedKeywords);
        for(const interests of Object.entries(this.props.recommendedKeywords)) {
          for(const course of Object.entries(this.props.courses)) {
             for (let i = 0; i < course[1].keywords.length; i++) {
               for (let j = 0; j < this.props.recommendedKeywords.length; j++) {
                 //if(x % 2 == 0) {
                    if(interests[1] === course[1].keywords[i]) {
                      // console.log(this.props.ratedCourses.length === undefined);
                      // console.log(this.props.ratedCourses === undefined);
                      // console.log(this.props.ratedCourses === {});
                      if(this.props.ratedCourses.length === undefined){
                        
                        if (topfour > 4) {
                          return courses;
                        }
                        courses.push(
                          <RecommendedCourse coursekey={course[0]} data={course[1]}
                            setCartCourses={(data) => this.props.setCartCourses(data)}>
                          </RecommendedCourse>
                        )
                        topfour++;
                        //i = course[1].keywords.length; j = this.props.recommendedKeywords.length;
                          break;
                      }
                      for(const rated of Object.entries(this.props.ratedCourses)) {
                        console.log(rated[0]);
                        console.log(course[0]);
                        if(course[0] === rated[0]) {
                          i = course[1].keywords.length; j = this.props.recommendedKeywords.length;
                          break;
                        }

                        if (topfour > 4) {
                          return courses;
                        }
                        courses.push(
                          <RecommendedCourse coursekey={course[0]} data={course[1]}
                            setCartCourses={(data) => this.props.setCartCourses(data)}>
                          </RecommendedCourse>
                        )
                        topfour++;
                        i = course[1].keywords.length; j = this.props.recommendedKeywords.length;
                          break;
                    }
                 }
                }
                  //x++;
               //}
             }
          }          
        }
        return courses;
      }
    
      render() {
        return (
    
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6" >{this.getCourses()}</div>
              {/*<div class="col-lg-6" >{this.getCourses(1)}</div>*/}
            </div>
          </div>
          
        )
      }
}


export default CourseRecommendor