//myName is my name and is like this so I can capitalize it through text.toUpperCase()

var myName = "Aaron Ellard"

//this wil contain my name, career, and description I must capitalize my name

var nameCareerDescription = [

    'Name: ' + myName.toUpperCase(),
    'Career: Minecraft Player',
    'Description: I never dig straight up',
    '\n',

]

//this will contain my interest

var myInterestAndPreviousExperience = [

    'My Interest:',
    '* Killing Mobs',
    '* Exploring the land',
    '* Spelunking in caves',
    '* Islands',
    '\n',
    'My Previous Experience:',
    '* Block placement - Played with Legos as child',
    '* Real life redstone - Took a wiring class in highschool',
    '* Item crafting - Arts and Crafts in grade school',


]

//Here are the list

// var skills =[

// 'Skills:',
// {skill: 'Red stone wiring', isCool: true },
// {skill: 'Diamond locating', isCool: false },
// {skill: 'Farming', isCool: false },
// {skill: 'Reading enchantment table', isCool: true },

// ]

//this is where the display is being made

for (var i = 0; i < nameCareerDescription.length; i++){
    console.log(nameCareerDescription[i]);
}


function displayPosition(){
for (var i = 0; i < myInterestAndPreviousExperience.length; i++){
    console.log(myInterestAndPreviousExperience[i]);
}
}
displayPosition()


// for (var i = 0; i < skills.length; i++) {
//     if (skills[i].isCool == true) {
//         console.log("* Bam: " + skills[i].skill)
//     }
//     else{
//         console.log("* " + skills[i].skill)
//     }
//}

function displaySkills(skill, isCool) {
    if (isCool == true) {
        console.log('* BAM: ' + skill)
    } else if ( isCool != true) {
        console.log('* ' + skill )
    }
}
console.log(' ');
console.log('My Skills')
displaySkills('Redstone Wiring', true);
displaySkills('Diamond Locating', false);
displaySkills('Farming', false);
displaySkills('Reading enchantment table language', true);

