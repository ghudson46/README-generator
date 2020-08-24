
const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
// const questions = [ "What is the title of your application?", "Describe your application?", "How can a user install this application?", "How does a user use this application?", "What license would you like to use?", "Who contributed to this application?", "What is your github username?", "What is your email?"

// ];

inquirer
  .prompt([
    {
      name: "title",
      message: "What is the title of your application?",
      default: "My App",
    },
    {
      name: "description",
      message: "Describe this application",
      default: "Cool app that does stuff",
    },
    {
      name: "installation",
      message: "What does a user have to do to install this application?",
      default: "nothing"
    },
    {
      name: "usage",
      message: "How does a user use this application?",
      default: "Use the command line in node.js",
    },
    {
      type: "list",
      name: "license",
      message: "What license would you like to use?",
      choices: ['BSD', 'MIT', 'GPL'],
    },
    {
      name: "contributers",
      message: "Who else contributed to this application?",
      default: "Nobody. This is my own work"
    },
    {
      name: "email",
      message: "What is your email address (in case somebody wants to contact you with questions about this application)",
      default: "n/a",
    },
    {
      name: "tests",
      message: "tests?",
      default: "idk",
    }
  ]).then(response => {
    fs.writeFile("readme.txt", JSON.stringify(response).split(","), function(err) {
      if(err) {
        return console.log(err);
      }
      console.log('The file was saved!');
    })
  })

// function to write README file
function writeToFile(fileName, data) {
  this.data = data;
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
