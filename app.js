const chalk = require("chalk");
const inquirer = require("inquirer");
const { contacts, viewContacts, addContact } = require("./functions");

console.clear();

function addressBook() {
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
      addContact(addressBook);
    } else if(choice === "View Contacts") {
      viewContacts(addressBook);
    } else if(choice === "Quit") {
      console.log("Goodbye!");
    }
  });
}

addressBook();