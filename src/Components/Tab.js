import React from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';

class Tab extends React.Component {

    deleteTab() {
       
        for(let i = 0; i < this.props.tabs.length; i++) {
          
            if (this.props.tabs[i] === this.props.title) {
               
                this.props.tabs.splice(i, 1);
            }
        }
        this.props.updateTabs(this.props.tabs)
    }
    
    render() {
        return (
            <div style = {{borderRadius:5,
                borderColor:'grey',
                padding:4, margin:2,
                display:'flex',
                flexDirection:'row'}}>
                
                
                <Button variant='secondary'
                        style={{fontSize:10,
                        padding:4,
                        width:25, height:25,
                        margin:3}}
                        onClick={()=> this.deleteTab()}>X</Button>
                        <span>{this.props.title}</span>
            </div>
        )
    }
}

export default Tab;