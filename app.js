const inquirer = require("inquirer");
const chalk = require("chalk");

let questions = [
  {
    name: "name",
    message: "What is your name?"
  },
  {
    name: "phone",
    message: "What is your phone number?"
  }
]

inquirer
  .prompt(questions)
  .then(answers => {
    let { name, phone } = answers;
    console.log(chalk.red(name), phone);
  });
