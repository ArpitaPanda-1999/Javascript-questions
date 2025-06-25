let person = {name : "Arpita"};
const member = [person]; //passing reference to member
person = null; //here person refering to null without destroing to object

console.log(member); //give you an object
//ans :[ { name: 'Arpita' } ]
