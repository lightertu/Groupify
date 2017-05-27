/**
 * Created by rui on 4/8/17.
 */
import React from 'react'
import {Card, Popup, Image, Label, Button} from 'semantic-ui-react'
import PropTypes from "prop-types"

import getColorByLanguage from  "../../modules/LanguageColorMap";

class PopupContent extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        groupNumber: PropTypes.number.isRequired,
        availability: PropTypes.array.isRequired,
        skills: PropTypes.array.isRequired
    };
    render() {
        let generateAvailabilities = (availability) => {
            let weekdayInitial = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
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

        let generateSkillLabels = (skills) => {
            let i = 0;
            return skills.map((skill) =>
                <Label as='a' key={ i++ } style = {{backgroundColor: getColorByLanguage(skill.name), color: "white"}} >
                    { skill.name }
                </Label>
            );
        };

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
                <Card.Content extra>
                    <Label.Group circular>
                        { generateAvailabilities(this.props.availability)}
                    </Label.Group>
                </Card.Content>
                <Card.Content extra>
                    <Label.Group size='mini'>
                        { generateSkillLabels(this.props.skills) }
                    </Label.Group>
                </Card.Content>
            </Card>
        );
    }
}


class ParticipantProfilePopup extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        participantId: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        groupNumber: PropTypes.number.isRequired,
        availability: PropTypes.array.isRequired,
        skills: PropTypes.array.isRequired,

        trigger: PropTypes.node.isRequired,
        position:PropTypes.string.isRequired,
        offset: PropTypes.number.isRequired
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
                    availability = { this.props.availability }
                    skills= { this.props.skills }
                    image={ this.props.image }
                />
            </Popup>
        )
    }
}

export default ParticipantProfilePopup;
