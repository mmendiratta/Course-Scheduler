import React from 'react';
import '../App.css';
import InterestTab from './InterestTab';

class InterestArea extends React.Component {
  
getInterests(stuff) {
    let list = [];

    for (const int of Object.values(stuff)) {
      list.push (
        <InterestTab recommendedKeywords={this.props.recommendedKeywords} setRecommendedKeywords = {(data) => this.props.setRecommendedKeywords(data)} 
                     updateKeywords={(data) => this.props.updateKeywords(data)} title={int}/>
      )
    }
    return list;
  }

  render() {
    return (

      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-2" >Course Keywords  {this.getInterests(this.props.interests)}</div>
          {/*<div class="col-sm-6" >Course Subjects  {this.getInterests(this.props.subjects)}</div>*/}  
        </div>
      </div>
      
    )
  }
}

export default InterestArea;