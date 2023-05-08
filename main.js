let contactList = ["Pepito Pérez", "Tal Cual", "John Doe", "Tin Marín", "Do Pingüé"];
let pos=null;
function addContact(fullName) {
  contactList.push(fullName);
}
function deleteContact(fullName) {
  pos=contactList.indexOf(fullName);
  contactList.splice(pos, 1);
}
function showContacts() {
  console.log(contactList);
}

addContact("Peranito DeTal");
showContacts();
deleteContact("Pepito Pérez");
showContacts();
deleteContact("John Doe");
showContacts();
