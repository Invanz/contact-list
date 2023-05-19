class Contacto{
  constructor(id, nombre, apellido, telefono, ciudad, direccion){
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.ubicacion = [ciudad, direccion];
  }
}
let contactList = [];
let pos=null;
function addContact(id, nombre, apellido, telefono, ubicacion, ciudad, direccion) {
  let contacto = new Contacto(id, nombre, apellido, telefono, ubicacion, ciudad, direccion);
  contactList.push(contacto); 
}
function deleteContact(id) {
  pos=contactList.indexOf(id);
  contactList.splice(pos, 1);
}
function showContacts() {
  console.log(contactList);
}