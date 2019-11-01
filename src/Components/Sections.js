import React from 'react';
import '../App.css';

class Sections extends React.Component{
    constructor(props) {
        super(props);
        this.getSections = this.getSections.bind(this);
    } 
    
    getSections(subsection) {
        let array = []
        if (subsection === null) {
            return array;
        }
        for(const section of Object.entries(subsection)) { 
            //console.log(section)
            array.push(section)
        }
        return array;
    }
    render() {
        
        return(
            <div>
                {this.getSections(this.props.subsection)}
            </div>
            
           
                       
        )
    }
     
}

export default Sections