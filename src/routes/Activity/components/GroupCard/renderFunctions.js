/*
 * Created by Matt on 05/25/17
 * This file defines a List of Maps containing the question types and what features they might use
 */

import React from 'react'
import {Map, List, Set} from 'immutable';
import {Card, Popup, Image, Label, Button, Icon, Segment} from 'semantic-ui-react'
import getColorByLanguage from  "../../modules/LanguageColorMap";

const radioAnswersStyle = {
    paddingTop: "0%",
    paddingBottom: "1%",
    paddingLeft: "3%",
    backgroundColor: "#F4F5F7"
}

const answersStyle = {
    paddingTop: "0%",
    paddingBottom: "1%",
    paddingLeft: "2%",
    backgroundColor: "#F4F5F7"
}
function TimeAvailability (dontReallyCare, sIndex, dontCare, answers) {

    let weekdays= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let labels = [];
    weekdays.forEach((day, index) => {
        (answers.has(day)) ?
                 labels.push(<Label circular key = {"GC_" + sIndex + "_TAGCR_"+index+"_"+day } 
                                as='a' color="green">{ day[0] }
                 </Label>)
             :
                 labels.push(<Label circular key = {"GC_" + sIndex + "_TAGCR_"+index+"_"+day } 
                                as='a'>{ day[0] }
                 </Label>)
    })
    {/* availability */}
    return (
            <Segment basic key = {"TAGCR_SEGMENT_" + sIndex} style={ {
                paddingTop: "0%",
                paddingBottom: "1%",
                paddingLeft: "1%",
                backgroundColor: "#F4F5F7"
            } }>
                <Label.Group circular size={"big"} style={ {marginLeft: "2%", paddingTop: "2%"} }>
                    {labels}
                </Label.Group>
            </Segment>
   );
}

function ProgrammingLanguages (answers, sIndex, totalPars) {
    let count = answers.countBy(x => {return x});
    return (
        <Segment  key = {"PLGCR_SEGMENT_" + sIndex} basic style={ {
            paddingTop: "1%",
            paddingBottom: "1%",
            paddingLeft: "3%",
            backgroundColor: "#F4F5F7"
        } }>
            <Label.Group style={ {marginTop: "-1%"} } size="medium">
                {
                    count.map((number, language) =>
                        <Label as='a' key={"GC_" + sIndex + "_PLGCR_"+language+"_"+number} 
                        style = {{backgroundColor: getColorByLanguage(language), color: "white"}} >
                            {language}
                        <Label.Detail style={ {color: "white"} }> 
                            {Math.floor((number / totalPars) * 100)}%
                        </Label.Detail>
                        </Label>)
                }
            </Label.Group>
        </Segment>
    );
}

function CircleSelection (dontReallyCare, sIndex, dontCare, answers) {
    let labels = [];
    answers.forEach((answer, index) => {
         labels.push(<Label circular key = {"GC_" + sIndex + "_CSGCR_"+index+"_"+answer} 
                        as='a' color="green">{ answer[0] }
         </Label>)
    })
    return (
            <Segment basic  key = {"CSGCR_SEGMENT_" + sIndex} style={ radioAnswersStyle}>
                <Label.Group circular size={"big"} style={ {marginLeft: "2%", paddingTop: "2%"} }>
                    {labels}
                </Label.Group>
            </Segment>
   );
}

function MultiInputTextField (dontCare, sIndex, dontCareEither, answers) {
    return (
        <Segment basic key = {"MTFGCR_SEGMENT_" + sIndex} >
            <Label.Group style={ {marginTop: "-1%"} } size="medium">
                {
                    answers.map((answer, index) =>
                    <Label as='a' key={"GC_" + sIndex + "_MTFGCR_"+index+"_"+answer} 
                    style = {{backgroundColor: 'grey', color: "white"}} >
                        { answer }
                    </Label>)
                }
            </Label.Group>
        </Segment>
    );
}

function SingleInputTextField (answers, sIndex) {
    return (
        <Segment basic key = {"STFGCR_SEGMENT_" + sIndex} style={ answersStyle }>
            <Label.Group style={ {marginTop: "-1%"} } size="medium">
                {
                    answers.map((answer, index) =>
                    <Label as='a' key={"GC_" + sIndex + "_STFGCR_"+index+"_"+answer} 
                    style = {{backgroundColor: 'grey', color: "white"}} >
                        { answer }
                    </Label>)
    
               }
            </Label.Group>
        </Segment>
    );
}

export {
    TimeAvailability,
    ProgrammingLanguages,
    CircleSelection,
    MultiInputTextField,
    SingleInputTextField,
}
