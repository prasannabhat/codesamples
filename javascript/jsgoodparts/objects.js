var empty_object = {};
var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};
var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};

// $(document).ready(function(){

//object update
stooge['first-name'] = 'Jerome';

//If the object does not already have that property name, the object is augmented:
stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = {
    model: 'Boeing 777'
};
flight.status = 'overdue';

writeToDoc("stooge is : ");
stooge.writeToDoc();

console.log(flight);
writeToDoc("\nflight is : ");
flight.writeToDoc();

//Prototype
var another_stooge = Object.beget(stooge);
another_stooge['first-name'] = "Prasanna";
another_stooge.nickname = 'Bhatru';
writeToDoc("\nanother_stooge is : ");
another_stooge.writeToDoc();

//The prototype relationship is a dynamic relationship. If we add a new property to a prototype, that property will immediately be visible in all of the objects that are based on that prototype:
stooge.profession = 'actor';
another_stooge.profession    // 'actor'

flight.hasOwnProperty('number')         // true
flight.hasOwnProperty('constructor')    // false

// The delete operator can be used to remove a property from an object. It will remove a property from the object if it has one. It will not touch any of the objects in the prototype linkage.
// Removing a property from an object may allow a property from the prototype linkage to shine through:
delete another_stooge['first-name'];
writeToDoc("\nanother_stooge after delete operation");
another_stooge.writeToDoc();
	
// });

