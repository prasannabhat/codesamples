//Method invocation pattern
// Create myObject. It has a value and an increment
// method. The increment method takes an optional
// parameter. If the argument is not a number, then 1
// is used as the default.

var add = function (a, b){
    return (a + b);
}

var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

myObject.increment(  );
writeToDoc(myObject.value);

myObject.increment(2);
writeToDoc(myObject.value);

//Function invocation pattern
// Augment myObject with a double method.

myObject.double = function (  ) {
    var that = this;    // Workaround.

    var helper = function (  ) {
        that.value = add(that.value, that.value)
    };

    helper(  );    // Invoke helper as a function.

    this.getValue = function (){
        return this.value;
    };
};

// Invoke double as a method.

myObject.double(  );
writeToDoc(myObject.getValue(  ));    // 6



//Constructor invocation pattern
// Create a constructor function called Quo.
// It makes an object with a status property.
var Quo = function (string) {
    this.status = string;
};

// Give all instances of Quo a public method
// called get_status.
Quo.prototype.get_status = function (  ) {
    return this.status;
};

// Make an instance of Quo.

var myQuo = new Quo("confused");

writeToDoc(myQuo.get_status(  ));  // confused

//Apply invocation pattern

// Make an array of 2 numbers and add them.
var array = [3, 4];
var sum = add.apply(null, array);    // sum is 7

// Make an object with a status member.

var statusObject = {
    status: 'A-OK'
};

// statusObject does not inherit from Quo.prototype,
// but we can invoke the get_status method on
// statusObject even though statusObject does not have
// a get_status method.

var status = Quo.prototype.get_status.apply(statusObject);
writeToDoc(status);
    // status is 'A-OK'


//Arguments
// A bonus parameter that is available to functions when they are invoked is the arguments array. 
// It gives the function access to all of the arguments that were supplied with the invocation, including 
// excess arguments that were not assigned to parameters. This makes it possible to write functions that take 
// an unspecified number of parameters:

// Make a function that adds a lot of stuff.
// Note that defining the variable sum inside of
// the function does not interfere with the sum
// defined outside of the function. The function
// only sees the inner one.

var sum = function (  ) {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }
    return sum;
};

writeToDoc("Sum of variable numbers is " + sum(4, 8, 15, 16, 23, 42)); // 108

// Because of a design error, arguments is not really an array. It is an array-like object. arguments has
// a length property, but it lacks all of the array methods. We will see a consequence of that design
// error at the end of this chapter.


//Exceptions
var add = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: 'TypeError',
            message: 'add needs numbers'
        }
    }
    return a + b;
}

// Make a try_it function that calls the new add
// function incorrectly.

var try_it = function (  ) {
    try {
        add("seven");
    } catch (e) {
        writeToDoc(e.name + ': ' + e.message);
    }
}
try_it(  );

//Recursion
var hanoi = function (disc, src, aux, dst) {
    if (disc > 0) {
        hanoi(disc - 1, src, dst, aux);
        var str = 'Move disc ' + disc + ' from ' + src + ' to ' + dst;
        writeToDoc(str);
        hanoi(disc - 1, aux, src, dst);
    }
}

hanoi(3, 'Src', 'Aux', 'Dst');


//Example of closures
var myObject2 = function (  ) {
    var value = 0;

    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function (  ) {
            return value;
        }
    }
}(  );

