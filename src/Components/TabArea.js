import React from 'react';
import '../App.css';
import {Card, Button} from 'react-bootstrap';
import Tab from './Tab';

class TabArea extends React.Component {
    /* method used to create new tabs for the area */
    getTabs() {
        let tabList = []
        for (const tabLabel of Object.values(this.props.tabs)) {
            tabList.push(<Tab key={tabLabel} title={tabLabel} tabs={this.props.tabs} updateTabs={() => this.props.updateTabs(this.props.keywordsToSearch)}> </Tab>)
        }
        return tabList
    }

    render() {
        return (
            <div>         
                <Card style= {{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', padding:4}}>
                    {this.getTabs()}
                </Card>
            </div>
        )
    }
}

export default TabArea