import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import CourseArea from './Components/CourseArea';
import CartArea from './Components/CartArea'
import {Tabs, Tab} from 'react-bootstrap';
import InterestArea from './Components/InterestArea';

class App extends React.Component {
  constructor(props) {
    super(props);

    var key;
    this.state = {
      allCourses: {},
      filteredCourses: {},
      subjects: [],
      cartCourses: {}, 
      previousCourses:{}, 
      recommendedCourses:{},
      ratedCourses:{},
      interestList:[],
      recommendedKeywords:[],
    };
  }

  componentDidMount() {
    fetch('https://mysqlcs639.cs.wisc.edu/classes').then(
      res => res.json()
    ).then(data => this.setState({allCourses: data, filteredCourses: data, subjects: this.getSubjects(data), interestList: this.setInterestList(data)}));
    
    fetch('https://mysqlcs639.cs.wisc.edu/students/5022025924/classes/completed/').then(
      res => res.json()
    ).then(data => this.setState({previousCourses: data}));

  }

  getSubjects(data) {
    let subjects = [];
    subjects.push("All");

    for(const course of Object.values(data)) {
      if(subjects.indexOf(course.subject) === -1)
        subjects.push(course.subject);
    }

    return subjects;
  }

  setCourses(courses) {
    this.setState({filteredCourses: courses})
  }

  setCartCourses(data) {
    this.key = data.number
    this.setState(
      {cartCourses:{...this.state.cartCourses, [this.key]:data}}
      );
  }

  deleteCart(data) {
    delete this.state.cartCourses[data.number]
    this.setState(this.state.cartCourses)
  }

  setRatedCourses(value, coursekey, extraWords) {
    this.setState(
      {ratedCourses:{...this.state.ratedCourses, [coursekey]: value}}
    )
    this.setRecommendedKeywords(extraWords)
    //console.log(value);
    //console.log(coursekey);
    console.log(this.state.ratedCourses);
  }

  setRecommendedKeywords(data) {
    if(Array.isArray(data)) {
      for(let i=0; i < data.length; i++) {
        this.setState(
          {recommendedKeywords:[...this.state.recommendedKeywords, data[i]]}
        );
      }
    } else {
      this.setState(
        {recommendedKeywords:[...this.state.recommendedKeywords, data]}
      );
    }
    
    console.log(this.state.recommendedKeywords);
  }
  
  updateKeywords(data) {
    this.setState( {recommendedKeywords: data} );
    console.log(this.state.recommendedKeywords);
  }
  
  setInterestList(data) {
    let allKeywords = [];

    for(const course of Object.values(data)) {
      for(let i = 0; i < course.keywords.length; i++) {
        if(allKeywords.indexOf(course.keywords[i]) === -1)
          allKeywords.push(course.keywords[i]);
      }
    }
    console.log(allKeywords);
    return allKeywords;
  }

  render() {
   
    return (
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />

      <Tabs defaultActiveKey="Sidebar" id="uncontrolled-tab-example">
        <Tab eventKey="Sidebar" title="Courses"> 
            <Sidebar setCourses={(courses) => this.setCourses(courses)} courses={this.state.allCourses} subjects={this.state.subjects} 
                     previousCourses={this.state.previousCourses} recommendedCourses={this.state.recommendedCourses}
                     setRatedCourses= {(value, coursekey, extraWords) => this.setRatedCourses(value, coursekey, extraWords)}
                     setRecommendedCourses ={()=> this.setRecommendedCourses()}
                     ratedCourses={this.state.ratedCourses} interests={this.state.interestList}
                     recommendedKeywords={this.state.recommendedKeywords}
                     setCartCourses={(data) => this.setCartCourses(data)}/>
              <div style={{marginLeft: '20vw'}}>
                <CourseArea data={this.state.filteredCourses} setCartCourses={(data) => this.setCartCourses(data)}/>
              </div>
        </Tab>
        <Tab eventKey="Cart" title="Cart">
           <div>
            <CartArea cartCourses={this.state.cartCourses} deleteCartCourses={(cartCourses) => this.deleteCart(cartCourses)}/>
            </div>
        </Tab>
        <Tab eventKey="InterestList" title="Interest List">
          <div>
            <InterestArea interests={this.state.interestList} subjects={this.state.subjects}
                          setRecommendedKeywords={(data) => this.setRecommendedKeywords(data)}
                          recommendedKeywords={this.state.recommendedKeywords}
                          updateKeywords={(data) => this.updateKeywords(data)} />
          </div>
        </Tab>
      </Tabs>
        
      </>
    )
  }
}

export default App;
