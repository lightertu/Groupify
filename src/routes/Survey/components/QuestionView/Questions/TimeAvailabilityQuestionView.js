/**
 * Created by Matt on 16/05/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Label, Header, Button, Popup, Segment} from 'semantic-ui-react';
import {Map, List, Set, OrderedSet} from 'immutable';

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class TimeAvailabilityQuestionView extends React.Component {
    render() {
        return (
            <Segment vertical style={{textAlign: 'center', paddingBottom:30}} >
                <Header as='h1' textAlign='center'>{this.props.title}</Header>
                <Header as='h3' textAlign='center'>{this.props.tooltip}</Header>
                {((this.props.answersEnableMinimum) && (this.props.answersEnableMaximum)) ?
                        <Header as='h5' textAlign='center'>
                        {'Must select at least ' + this.props.answersMinimum
                            + ' and at most ' + this.props.answersMaximum}
                        </Header>
                    :
                        <Header as='h5' textAlign='center'>
                            {(this.props.answersEnableMinimum) &&
                            'Must select at least ' + this.props.answersMinimum}
                            {(this.props.answersEnableMaximum) &&
                                'Must select at most ' + this.props.answersMaximum}
                        </Header>
                }
                        {
                           weekDays 
                                .map(day => ( 
                                    <Popup
                                        key={"_Answer_" + this.props.index + "_." + day}
                                        trigger={
                                            <Button 
                                                disabled = {this.props.isSubmitting}
                                                loading = {this.props.isSubmitting}
                                                className={"ui " 
                                                + ((this.props.answers.has(day)) ? " green " : " grey ")
                                                + " circular huge label"}
                                                onClick={() => {
                                                    (this.props.answers.has(day)) ? 
                                                        this.props.removeAnswer(
                                                            this.props.index, day 
                                                        )
                                                    :
                                                        this.props.addAnswer(
                                                            this.props.index, day 
                                                        )
                                                }}>
                                                {day[0]}
                                            </Button>
                                        }
                                        position='top center'
                                        content={day}
                                    />
                                )
                            )
                        }
            </Segment> 
       );
    }
}

export default TimeAvailabilityQuestionView;
