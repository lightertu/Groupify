/*
 * Created by Matt on 05/25/17
 * This file defines a List of Maps containing the question types and what features they might use
 */

import React from 'react'
import {Map, List, Set} from 'immutable';
import {Card, Popup, Image, Label, Button, Icon} from 'semantic-ui-react'
import getColorByLanguage from  "../../modules/LanguageColorMap";

function TimeAvailability (answers) {
    let weekdays= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let labels = [];
    weekdays.forEach((day, index) => {
        (answers.has(day)) ?
                 labels.push(<Label circular key = {"AVQR_"+index+"_"+day } 
                                as='a' color="green">{ day[0] }
                 </Label>)
             :
                 labels.push(<Label circular key = {"AVQR_"+index+"_"+day } 
                                as='a'>{ day[0] }
                 </Label>)
    })
    return labels;
}

function ProgrammingLanguages (answers) {
            return answers.map((answer, index) =>
                <Label as='a' key={"AVQR_"+index+"_"+answer} style = {{backgroundColor: getColorByLanguage(answer), color: "white"}} >
                    { answer }
                </Label>
            );
}

function CircleSelection (answers) {
    let labels = [];
    answers.forEach((answer, index) => {
         labels.push(<Label circular key = {"AVQR_"+index+"_"+answer} 
                        as='a' color="green">{ answer[0] }
         </Label>)
    })
    return labels;

}

function MultiInputTextField (answers) {
    return answers.map((answer, index) =>
        <Label as='a' key={"AVQR_"+index+"_"+answer} style = {{backgroundColor: 'grey', color: "white"}} >
            { answer }
        </Label>
    );
}

function SingleInputTextField (answers) {
    return answers.map((answer, index) =>
        <Label as='a' key={"AVQR_"+index+"_"+answer} style = {{backgroundColor: 'grey', color: "white"}} >
            { answer }
        </Label>
    );
}

export {
    TimeAvailability,
    ProgrammingLanguages,
    CircleSelection,
    MultiInputTextField,
    SingleInputTextField,
}
