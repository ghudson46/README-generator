const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const addModule = require("./utils/generateMarkdown.js");

const markdown = addModule.genMarkdown;
const fileName = "README.md";


// array of questions for user
const questions = [

    {
        type: "input",
        message: "What's the App name?",
        name: "title"
    },
    {
        type: "input",
        message: "Enter deployed App link.",
        name: "deployed"
    },
    {
        type: "input",
        message: "Take a screenshot or gif of your App and enter the url.",
        name: "appImg"
    },
    {
        type: "input",
        message: "What is your App about? Your process?",
        name: "description"
    },
    {
        type: "input",
        message: "What is the installation process?",
        name: "install"
    },
    {
        type: "input",
        message: "How do you use the App?",
        name: "usage"
    },
    {
        type: "input",
        message: "What license are you using? Please input a number. \n 1. MIT \n 2. GPL \n 3. Apache \n 4. Other\n?" ,
        name: "license"
    },
    {
        type: "input",
        message: "What are the stipulations if others what to contribute to your App?" ,
        name: "contribute"
    },
    {
        type: "input",
        message: "What is your GitHub user name?" ,
        name: "gitUser"
    },
    {
        type: "input",
        message: "What is your GitHub profile link?" ,
        name: "gitLink"
    },
    {
        type: "input",
        message: "What is your Email?" ,
        name: "email"
    },
    {
        type: "input",
        message: "How should people go about contacting you?" ,
        name: "contactMe"
    },
    {
        type: "input",
        message: "How did you test the app?" ,
        name: "test"
    }

];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{ 
        if (err) {
            return console.log(err);
        }

        console.log("success!");
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(data => {
        let content = markdown(data);
        writeToFile(fileName, content);
    });

}

// function call to initialize program
init();