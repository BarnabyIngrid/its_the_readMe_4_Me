// Includes the following packages
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./util/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);


// array of questions for user , inquirer will trigger questions
const questions = [
        {
          type:'input',
          name:'title',
          message:"what is the title of the project?",
        },
        {
          type:'input',
          name:'sections entitled',
          message:"what are the sections entitled for this project?",
        },
        {
          type: 'input',
          name: 'description',
          message: 'Please enter a description.',
        },
        {
          type: 'input',
          name: 'deployed application url',
          message: 'Please enter a deployed application.',
        },
        {
          type:'input',
          name:'usage',
          message:"Please describe how to use this application.",
        },
        {
          type:'input',
          name:'contributors',
          message:"Please include any contributions or resources.",
        },

        {
          type:'input',
          name:'testing',
          message:"Please enter any test guidelines or methods here.",
        },

        {
          type: 'input',
          name: 'github',
          message: 'Please enter your GitHub username.',
        },
        {
          type: 'list',
          name: 'license',
          message: 'Please select a license.',
          choices: [
              'Mozilla',
              'Apache',
              'MIT'
          ]
        },
        {  
          type:'input',
          name:'installation',
          message:"any credits?",
        },
];

// function to initialize program

 function init() {
 return inquirer.prompt(questions)
  .then((responses) => {
    console.log("Creating Professional README.md File...", responses);
    writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
}
init();

// function to write README file
 function writeToFile(fileName, data) {
  console.log("TEST: ", path.join(process.cwd(), fileName));
   return fs.writeFileSync(path.join(process.cwd(), fileName), data);
   }


