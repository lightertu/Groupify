import React, { Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import {Dropdown, Popup, Button, Icon} from 'semantic-ui-react'
import EditForm from './EditForm';

class SurveyPopup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
  
        return (
            <div className="">
            <Popup
                trigger={<Icon name='add' color={"green"} size={"large"} />}
                
                hoverable
                flowing

            >

            <EditForm handleQuestionAdd={this.props.handleQuestionAdd}/>
            </Popup>
            </div>
        )
    }
}

export default SurveyPopup