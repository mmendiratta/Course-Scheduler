import React from 'react';
import '../App.css';
import {Button} from 'react-bootstrap';

class Rating extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          variant: 'light',
          value: 0
      }
  }
  async changeRating(e, x) {
    if(this.state.variant === 'light') {
        await this.setState( {variant: 'dark', value: x} );
        if(x >= 3) {
          this.props.setRatedCourses(this.state.value, this.props.coursekey, this.props.keywords);
        } else {
            this.props.setRatedCourses(this.state.value, this.props.coursekey, []);
        }
    } else { 
        await this.setState( {variant: 'light', value: 0} );
        this.props.setRatedCourses(this.state.value, this.props.coursekey, []);
    }
    //console.log(this.props.key);
   
  }
    render() {
        return (
            <>
            <Button variant = {this.state.variant} 
                    style={{height: '10%', width: '19%', margin: '1px'}}
                    onClick={ (e) => this.changeRating(e, this.props.rate) } >
                    {this.props.rate}
            </Button>
            </>
        )
      }
}

export default Rating