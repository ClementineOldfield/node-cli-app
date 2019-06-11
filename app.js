const chalk = require("chalk");
const inquirer = require("inquirer");
const { contacts, viewContacts, addContact } = require("./functions");

inquirer
  .prompt({
    name: "menu",
    message: "What would you like to do?",
    type: "list",
    choices: ["Add a Contact", "View Contacts", "Quit"]
  })
  .then(answers => {
    let choice = answers.menu;
    if(choice === "Add a Contact") {
      addContact();
    }
  });


