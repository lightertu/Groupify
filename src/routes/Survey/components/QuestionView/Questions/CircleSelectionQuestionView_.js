/**
 * Created by Matt on 16/05/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Label, Header, Button} from 'semantic-ui-react';
import {Map, List, Set, OrderedSet} from 'immutable';

class CircleSelectionQuestionView extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center', paddingTop:30}} >
                <segment style={{textAlign: 'center'}} >
                    <Header as='h1' textAlign='center'>{this.props.title}</Header>
                    <Header as='h4' textAlign='center'>{this.props.tooltip}</Header>
                        <div style={{textAlign: 'center'}}>
                            {
                                this.props.answersFilter
                                    .map(answer => ( 
                                        <Button className={"ui " 
                                        + ((this.props.answers.has(answer)) ? " green " : " grey ")
                                        + " circular huge label"}
                                        key={"_Answer." + answer}
                                        onClick={() => {
                                            (this.props.answers.has(answer)) ? 
                                                this.props.removeSurveyQuestionAnswer(
                                                    this.props.type, this.props.title, answer
                                                )
                                            :
                                                this.props.addSurveyQuestionAnswer(
                                                    this.props.type, this.props.title, answer
                                                )


                                        }}>
                                            {answer[0]}
                                        </Button>
                                    )
                                )
                            }
                        </div>
                </segment> 
           </div>
       );
    }



}


export default CircleSelectionQuestionView;
