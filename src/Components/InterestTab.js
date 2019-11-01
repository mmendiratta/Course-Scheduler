import React from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';

class InterestTab extends React.Component {
constructor(props) {
    super(props);
    this.state={
        buttonColor:'secondary'
    }
}

    async changeButton() {
        if (this.state.buttonColor === 'secondary') {
            await this.setState (
                {buttonColor: 'primary'}
            )
        } else {
            await this.setState (
                {buttonColor: 'secondary'}
            )
        }
        if (this.state.buttonColor === 'primary') {
           this.props.setRecommendedKeywords(this.props.title);
        } else {
            for(let i = 0; i < this.props.recommendedKeywords.length; i++) {
                if (this.props.recommendedKeywords[i] === this.props.title) {
                    this.props.recommendedKeywords.splice(i, 1);
                }
        }
        this.props.updateKeywords(this.props.recommendedKeywords);
    }
}
    
    render() {
        return (
            <div style = {{borderRadius:5,
                borderColor:'grey',
                padding:4, margin:2,
                display:'flex',
                flexDirection:'row'}}>
                
                
                <Button variant={this.state.buttonColor}
                        style={{fontSize:10,
                        padding:4,
                        width:25, height:25,
                        margin:3}}
                        onClick={()=> this.changeButton()}>X</Button>
                        <span>{this.props.title}</span>
            </div>
        )
    }
}

export default InterestTab;