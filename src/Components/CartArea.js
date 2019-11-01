import React from 'react';
import '../App.css';
import CartCourse from './CartCourse';

class CartArea extends React.Component{
    getCourses() {
        let courses = [];

        for(const course of Object.entries(this.props.cartCourses)) {
            courses.push (
            <CartCourse key={course[0]} data={course[1]} deleteCartCourses={(cartCourses) => this.props.deleteCartCourses(cartCourses)}/>
            )
        }

        return courses;
    }

    render() {
        return (
            <div style={{margin: '5px'}}>
                {this.getCourses()}
            </div>
        )
    }
}


export default CartArea