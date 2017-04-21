/**
 * Created by rui on 4/20/17.
 */
import React from 'react'
import PropTypes from 'prop-types';
import {Label, Segment} from "semantic-ui-react";
import getColorByLanguage from  "../../../modules/LanguageColorMap";

export default class SkillCountSegment extends React.Component {
    static propTypes = {
        participants: PropTypes.array.isRequired,
        isOver: PropTypes.bool.isRequired,
    };

    generateSkillCountMap = (participants) => {
        let skillCountMap = {};
        for (let i = 0; i < participants.length; i++) {
            let skills = participants[i].skills;
            for (let j = 0; j < skills.length; j++) {
                let skillName = skills[j].name;
                if (!(skillName in skillCountMap)) {
                    skillCountMap[skillName] = 1;
                } else {
                    skillCountMap[skillName]++;
                }
            }
        }
        return skillCountMap;
    };

    generateLanguageTags = (participants) => {
        let skillCountMap = this.generateSkillCountMap(participants);
        let key = 0;
        return Object.keys(skillCountMap).map((skillName) => (
            <Label as='a' key = { key++ } style = {{backgroundColor: getColorByLanguage(skillName), color: "white"}}>
                { skillName }
                <Label.Detail style = { {color: "white"} }> {skillCountMap[skillName]} </Label.Detail>
            </Label>
        ));
    };

    render() {
        return (
            <Segment basic style={ { backgroundColor: (!this.props.isOver) ? "#f4f5f7" : "#EFF0F2" } }>
                <Label.Group style={ {marginTop: "-1%"} } size="medium">
                    { this.generateLanguageTags(this.props.participants) }
                </Label.Group>
            </Segment>
        );
    }
}
/**
 * Created by rui on 4/20/17.
 */
