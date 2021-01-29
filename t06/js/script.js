'use strict'

let firstName = prompt('Enter your first name')
let lastName = prompt ('Enter your last name')

if ( firstName.match(/^\b[a-zA-Z]+\b$/i) && lastName.match(/^\b[a-zA-Z]+\b$/i)){


let capFirstName = firstName[0].toUpperCase() + (firstName.slice(1)).toLowerCase();
let capLastName = lastName[0].toUpperCase() + (lastName.slice(1)).toLowerCase();

alert('Greetings ' + capFirstName + ' ' + capLastName) 
} else {
    alert ('Wrong input!')
}