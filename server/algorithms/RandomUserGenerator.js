/*
Author: ReiTu and Kai Huang
Email: huangkai2518@gmail.com
*/

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
let skillLevel = ["Beginner", "Some Experience", "Expert" ];

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
    return Math.floor(Math.random() * (maxVal-minVal+1)) + minVal;
};
let pickName = () => {
    return names[randomBetween(0, names.length-1)];
};
let pickImage = () => {
    return images[randomBetween(0, images.length-1)];
};
let pickGroup = (numOfGroups) => {
    // return randomBetween(-1, numOfGroups);
    return -1;
};
let pickSkills = () => {
    let maxSkillNum = 5;
    let numSkills = randomBetween(1, maxSkillNum);
    let userSkills = [];
    for (let i = 0; i < numSkills; i++) {
        let skill = {};
        skill.name = skills[randomBetween(0, skills.length - 1)];
        skill.level = skillLevel[randomBetween(0, skillLevel.length - 1)];
        userSkills.push( skill );
    }
    return userSkills;
};
let pickAvailability = () => {
    let week = [];
    for (let i = 0; i < 30; i++) {
        (randomBetween(1, 100) >= 25) ? week.push(false) : week.push(true);

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
            id: randId,
            // name: randName,
            // image: randImage,
            // skills: randSkills,
            groupNum: randGroupNumber,
            freeTime: randAvailability
        });
    };

    let users = [];
    for (let i = 0; i < numOfPeople; i++) {
        users.push(generateUser());
    }
    return  users;
};

module.exports = {
    names:              names,
    images:             images,
    skills:             skills,
    skillLevel:         skillLevel,
    guid:               guid,
    randomBetween:      randomBetween,
    pickName:           pickName,
    pickImage:          pickImage,
    pickGroup:          pickGroup,
    pickSkills:         pickSkills,
    pickAvailability:   pickAvailability,
    generateUsers:      generateUsers
};


