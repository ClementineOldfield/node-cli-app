const inquirer = require("inquirer");
let contacts = [];

class Contact {
  constructor(firstName, lastName, phone){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
  }
}

function addContact() {
  console.log("Adding a contact");
  let questions = [
    {
      name: "firstName",
      message: "First Name?"
    },
    {
      name: "lastName",
      message: "Last Name?",
    },
    {
      name: "phoneNumber",
      message: "Phone Number?"
    }
  ]
  inquirer
    .prompt(questions)
    .then(answers => {
      let { firstName, lastName, phoneNumber } = answers;
      console.log(answers);
      contacts.push(new Contact(firstName, lastName, phoneNumber));
      console.log(`Successfully added ${firstName} ${lastName} to your address book`)
    })
}

function viewContacts() {
  console.log("Displaying contacts");
  console.log(contacts);
}

module.exports = {
  contacts,
  Contact,
  addContact
}