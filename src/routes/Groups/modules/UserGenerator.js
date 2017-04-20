/**
 * Created by rui on 4/13/17.
 */
import React from 'react'

let names = ["Rui Tu", "Kai Huang", "Joseph I", "Matt", "He daHe"];
let images = [
    "https://react.semantic-ui.com/assets/images/avatar/large/jenny.jpg",
    "https://react.semantic-ui.com/assets/images/avatar/large/justen.jpg",
    "https://react.semantic-ui.com/assets/images/avatar/large/stevie.jpg",
    "https://react.semantic-ui.com/assets/images/avatar/large/veronika.jpg",
    "https://semantic-ui.com/images/avatar/large/steve.jpg",
    "https://semantic-ui.com/images/avatar2/large/kristy.png",
    "https://semantic-ui.com/images/avatar2/large/matthew.png",
    "https://semantic-ui.com/images/avatar2/large/molly.png",
    "https://semantic-ui.com/images/avatar2/large/elyse.png",
    "https://semantic-ui.com/images/avatar/large/daniel.jpg",
    "https://semantic-ui.com/images/avatar/large/helen.jpg",

];
let skills = ["Java", "C++", "JavaScript", "Lisp", "Python", "Node.js", "React.js"];

let guid = () => {
    let s4 =() => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
};
let randomBetween = (minVal, maxVal) => {
    return Math.floor((Math.random() * maxVal) + minVal);
};
let pickName = () => {
    return names[randomBetween(0, names.length)];
};
let pickImage = () => {
    return images[randomBetween(0, images.length)];
};
let pickGroup = (numOfGroups) => {
    return randomBetween(-1, numOfGroups);
    //return -1;
};
let pickSkills = () => {
    let maxSkillNum = 5;
    let numSkills = randomBetween(1, maxSkillNum);
    let userSkills = [];
    for (let i = 0; i < numSkills; i++) {
        let skill = {};
        skill.name = skills[randomBetween(1, skills.length - 1)];
        userSkills.push( skill );
    }
    return userSkills;
};
let pickAvailability = () => {
    let week = [];
    for (let i = 0; i < 7; i++) {
        (randomBetween(0, 5) >= 3) ? week.push(false) : week.push(true);

    }
    return week;
};
let generateUsers = (numOfGroups, numOfPeople) => {
    let generateUser = () => {
        let randId = guid(),
            randName = pickName(),
            randImage = pickImage(),
            randSkills = pickSkills(),
            randGroupNumber = pickGroup(numOfGroups),
            randAvailability = pickAvailability();

        return ({
            participantId: randId,
            name: randName,
            image: randImage,
            skills: randSkills,
            groupNumber: randGroupNumber,
            availability: randAvailability
        });
    };

    let users = [];
    for (let i = 0; i < numOfPeople; i++) {
        users.push(generateUser());
    }
    return  users;
};
export default generateUsers