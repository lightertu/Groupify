/**
 * Created by rui on 4/8/17.
 */
import React from 'react'
import {Card, Popup, Image, Label, Button, Icon} from 'semantic-ui-react'
import PropTypes from "prop-types"
import * as renderFunctions from './renderFunctions'
import getColorByLanguage from  "../../modules/LanguageColorMap";

class PopupContent extends React.Component {
    static propTypes = {
        /*
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        groupNumber: PropTypes.number.isRequired,
        availability: PropTypes.array.isRequired,
        skills: PropTypes.array.isRequired
        */
    };
    render() {        
    let answerSegments = [];
    this.props.surveyResponses.forEach((response, index) => {
        (renderFunctions[response.get('question')]) &&
            answerSegments.push(
                <Card.Content extra key={index+'_AQRVP__'}>
                    <Label.Group size='mini'>
                        {renderFunctions[response.get('question')](response.get('answer'))}
                    </Label.Group>
                </Card.Content>
            );
    })

        return (
            <Card>
                <Card.Content>
                    <Image floated='right' size='mini' shape={ "rounded" } src={ this.props.image }/>
                    <Card.Header>
                        { this.props.name }
                    </Card.Header>
                    <Card.Meta>
                        {
                            (this.props.groupNumber >= 0) ?
                                <div style={ { color: "green" } }> Group: { this.props.groupNumber } </div>:
                                <div style={ { color: "red" } }>No Group </div>
                        }
                    </Card.Meta>
                </Card.Content>
                {answerSegments}
            </Card>
        );
    }
}


class ParticipantProfilePopup extends React.Component {
    static propTypes = {
        /*
        name: PropTypes.string.isRequired,
        participantId: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        groupNumber: PropTypes.number.isRequired,
        availability: PropTypes.array.isRequired,
        skills: PropTypes.array.isRequired,

        trigger: PropTypes.node.isRequired,
        position:PropTypes.string.isRequired,
        offset: PropTypes.number.isRequired
        */
    };

    render() {
        return (
            <Popup      
                trigger={ this.props.trigger }
                position={ this.props.position }
                offset={ this.props.offset }
                flowing
                hoverable
                style = { {padding: 0} }
            >
                <PopupContent
                    key = { this.props.participantId }
                    name = {this.props.name}
                    groupNumber = { this.props.groupNumber }
                    surveyResponses={ this.props.surveyResponses }
                    image={ this.props.image }
                />
            </Popup>
        )
    }
}

export default ParticipantProfilePopup;
