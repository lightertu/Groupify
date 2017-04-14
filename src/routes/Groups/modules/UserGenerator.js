/**
 * Created by rui on 4/13/17.
 */
import React from 'react'

let randomBetween = (minVal, maxVal) => {
    return Math.floor((Math.random() * maxVal) + minVal);
};

function pickName() {
    let names = ["Rui Tu", "Kai Huang", "Joseph I", "Matt", "He daHe"];
    return names[randomBetween(0, names.length)];
}

function pickImage() {
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
    return images[randomBetween(0, images.length)];
}

function pickGroup(numOfGroups) {
    return randomBetween(-1, numOfGroups);
}

function pickSkills() {
    let maxSkillNum = 5;
    let skills = ["Java", "C++", "JavaScript", "Lisp", "Python", "Node.js", "React.js"];
    let skillLevel = ["Beginner", "Some Experience", "Expert" ];
    let numSkills = randomBetween(1, maxSkillNum);
    let userSkills = [];
    for (let i = 0; i < numSkills; i++) {
        let skill = {};
        skill.name = skills[randomBetween(1, skills.length - 1)];
        skill.level = skillLevel[randomBetween(0, skillLevel.length - 1)];
        userSkills.push( skill );
    }
    return userSkills;
}

function pickAvailability() {
    let week = [];
    for (let i = 0; i < 7; i++) {
        (randomBetween(0, 5) >= 3) ? week.push(false) : week.push(true);

    }
    return week;
}

export default function generateUsers(numOfGroups, numOfPeople) {
    function generateUser () {
        let randName = pickName(),
            randImage = pickImage(),
            randSkills = pickSkills(),
            randGroupNumber = pickGroup(numOfGroups),
            randAvailability = pickAvailability();

        return ({
            name: randName,
            image: randImage,
            skills: randSkills,
            groupNumber: randGroupNumber,
            availability: randAvailability
        });
    }

    let users = [];
    for (let i = 0; i < numOfPeople; i++) {
        users.push(generateUser());
    }
    return  users;
}

