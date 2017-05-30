/**
 * Created by Joseph on 5/29/17.
 */

import React from 'react'
import {Segment, Image, List, Button, Header, Icon} from 'semantic-ui-react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import PropTypes from "prop-types"
import {DragSource, DropTarget} from 'react-dnd';
import {ParticipantTypes} from "../../constants/ParticipantTypes"

const participantSidebarTarget = {
    drop(props, monitor) {
        props.setCurrentlySelected(""); // resets curretly selected user
        // props.handleTrashed();
        let droppedItem = monitor.getItem();
        props.updateParticipantGroupNumber(
            props.activityId,
            droppedItem.participantId,
            droppedItem.oldGroupNumber,
            -2)
    },
};

function collectDrop(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
    }
}

@DropTarget(ParticipantTypes.GROUPED_PARTICIPANT, participantSidebarTarget, collectDrop)
class ParticipantTrash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {connectDropTarget, isOver, trashed} = this.props;
        
        let display;
        let color  = (isOver) ? "blue" : "grey";
        let response = trashed ? "Thank you!" : "test";

        if(this.props.dragging){
            display = ( <div>
                            <Icon   color={color}
                                    name="trash outline"
                                    size='massive'
                                    style={{height:'100%', cursor:'pointer', marginTop:0, marginBotton:0}}  />
                            <h3><i>Trash goes here!</i></h3>
                        </div>
            );
        }

        return connectDropTarget(
            <div style={{position: "fixed", bottom: 100, left: 75, textAlign: "center"}}>
                <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={700}>
                    {display}
                </CSSTransitionGroup>
            </div>              
        )
    }
}

export default ParticipantTrash;
