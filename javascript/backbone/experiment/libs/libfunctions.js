//Define beget function on Object, hence available to all the JS objects
if (typeof Object.beget !== 'function') {
     Object.beget = function (o) {
         var F = function () {};
         F.prototype = o;
         return new F();
     };
}

var is_array = function (value) {
    return value &&
        typeof value === 'object' &&
        typeof value.length === 'number' &&
        typeof value.splice === 'function' &&
        !(value.propertyIsEnumerable('length'));
};

Object.prototype.writeToDoc = function (obj){
 	var printObj;
 	if (typeof obj !== "undefined"){
		printObj = obj;
	}
	else if (this !== window) {
		printObj = this;
	}
	else
	{
		printObj = undefined;
	}
	printObject(printObj);
	
};

function printObject (printObj){
	var index;
	var len;
	switch (typeof printObj)
	{
		case 'object':
			if (is_array(printObj)){
				len = printObj.length;
				for (index = 0; index < len; index++){
					$('#contentField').append(printObj[index] + "\n");	
				}
			}
			else{
				
				$('#contentField').append("This is object :" + "\n");
				printObject(getPrintObj(printObj));
			}
			//writeToDoc(arr);
			// document.writeln("this is object");
		break;
 		default:
			$("#contentField").append(printObj + "\n");
			// document.writeln(printObj);
		break;
	}
}

function getPrintObj (obj,array){
	var a = array || [];
	var name;
	var pair = 0;
	for (name in obj) {
		switch(typeof obj[name]){
			case 'function':
			break;

			case 'object' :
			pair = name + ': [object]';
			a.push(pair);
			getPrintObj(obj[name],a);
			a.push("---------------------");
			break;

			default:
				pair = name + ': ' + obj[name];
				a.push(pair);
			break;
		}
		// if (pair != 0){
		// 	a.push(pair);
		// 	pair = 0;
		// }
	}
	return a;
}


// Add a method conditionally.

Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
};

String.method('trim', function (  ) {
    return this.replace(/^\s+|\s+$/g, '');
});
// writeToDoc('"' + "   neat   ".trim(  ) + '"');

String.method('deentityify', function (  ) {

// The entity table. It maps entity names to
// characters.

    var entity = {
        quot: '"',
        lt:   '<',
        gt:   '>'
    };

// Return the deentityify method.

    return function (  ) {

// This is the deentityify method. It calls the string
// replace method, looking for substrings that start
// with '&' and end with ';'. If the characters in
// between are in the entity table, then replace the
// entity with the character from the table. It uses
// a regular expression (Chapter 7).

        return this.replace(/&([^&;]+);/g,
            function (a, b) {
                var r = entity[b];
                return typeof r === 'string' ? r : a;
            }
        );
    };
}(  ));


Function.method('inherits', function (Parent) {
    this.prototype = new Parent(  );
    return this;
});

