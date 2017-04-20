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
        //alert(JSON.stringify(skillCountMap));
        //console.log(JSON.stringify(Object.keys(skillCountMap)));

        return Object.keys(skillCountMap).map((key) => (
            <Label as='a' style = {{backgroundColor: getColorByLanguage(key), color: "white"}}>
                { key }
                <Label.Detail style = { {color: "white"} }> {skillCountMap[key]} </Label.Detail>
            </Label>
        ));
    };

    render() {
        return (
            <Segment basic style={ {backgroundColor: (!this.props.isOver) ? "#f4f5f7" : "#EFF0F2"} }>
                <Label.Group style={ {marginTop: "-1%"} }>
                    { this.generateLanguageTags(this.props.participants) }
                </Label.Group>
            </Segment>
        );
    }
}
/**
 * Created by rui on 4/20/17.
 */
