import React from 'react'
import PropTypes from 'prop-types';
import {Label, Segment} from "semantic-ui-react";

export default class AvailabilitySegment extends React.Component {
    static propTypes = {
        participants: PropTypes.array.isRequired,
        isOver: PropTypes.bool.isRequired,
    };

    render() {
        return (
            <Segment basic style={ {padding: "0%", backgroundColor: (!this.props.isOver) ? "#f4f5f7" : "#EFF0F2"} }>
                <Label.Group circular size={"huge"} style={ {marginLeft: "2%", paddingTop: "2%"} }>
                    <Label as='a'>S</Label>
                    <Label as='a'>M</Label>
                    <Label as='a'>T</Label>
                    <Label as='a'>W</Label>
                    <Label as='a'>T</Label>
                    <Label as='a'>F</Label>
                    <Label as='a'>S</Label>
                </Label.Group>
            </Segment>
        );
    }
}
/**
 * Created by rui on 4/20/17.
 */
