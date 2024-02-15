

const skills = [
    {id: 1048, skill: "React", thisCourse: true},
    {id: 2748, skill: "React Native", thisCourse: false},
    {id: 1315, skill: "Python", thisCourse: true},
    {id: 1677, skill: "Django", thisCourse: true},
    {id: 2103, skill: "SQL", thisCourse: false}
]

module.exports = {
    getAll,
    getOne,
    create
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id)
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done - false;
    skills.push(skill);
}

