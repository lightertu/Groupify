import React from 'react'
import PropTypes from 'prop-types';
import {Label, Segment} from "semantic-ui-react";

export default class AvailabilitySegment extends React.Component {
    static propTypes = {
        participants: PropTypes.array.isRequired,
        isOver: PropTypes.bool.isRequired,
    };


    render() {
        let generateAvailabilities = (availability) => {
            let weekdayInitial = ['S', 'M', 'T', 'W', 'T', 'F'];
            if (availability.length !== 7) {
                alert("availability array:  is greater than 7")
            }

            let labels = [];
            for (let i = 0; i < weekdayInitial.length; i++) {
                (availability[i]) ?
                    labels.push(<Label key = { i } as='a' color="green">{ weekdayInitial[i] }</Label>):
                    labels.push(<Label key = { i } as='a'>{ weekdayInitial[i] }</Label>);
            }
            return labels;
        };

        let overAllAvailability = (participants) => {
            if (participants.length <= 0) {
                return [false, false, false, false, false, false, false];
            }
            return participants.reduce((acc, participant) => {
                for (let i = 0; i <  7; i++) {
                    acc[i] = acc[i] && participant.availability[i];
                }

                return acc;
            }, [true, true, true, true, true, true, true]);
        };

        return (
            <Segment basic style={ {padding: "0%", backgroundColor: (!this.props.isOver) ? "#f4f5f7" : "#EFF0F2"} }>
                <Label.Group circular size={"huge"} style={ {marginLeft: "2%", paddingTop: "2%"} }>
                    { generateAvailabilities(overAllAvailability(this.props.participants)) }
                </Label.Group>
            </Segment>
        );
    }
}
/**
 * Created by rui on 4/20/17.
 */
