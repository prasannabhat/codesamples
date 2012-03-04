// Backbone Events module
writeToDoc("Hello World\n");

var object = {};

_.extend(object, Backbone.Events);

object.on("alert", function(msg) {
  // alert("Triggered " + msg);
});

object.on("change:color", function(msg) {
  // alert("Triggered " + msg);
});

object.trigger("alert", "an event");
object.trigger("change:color", "an event");


// Backbone Models
var Sidebar = Backbone.Model.extend({
  promptColor: function() {
    var cssColor = prompt("Please enter a CSS color:");
    this.set({color: cssColor});
  }
});

window.sidebar = new Sidebar;

sidebar.on('change:color', function(model, color) {
  $('#sidebar').append(color + "\n");
  //$('#sidebar').css({'color': color});
});

sidebar.set({color: 'white'});

// sidebar.promptColor();

var Book = Backbone.Model.extend({
	initialize : function(){
		// this.set({title : "Demo book", content : "Demo Content"});
	}
});

book = new Book({title : "The Power of Now", content : "Chapter1"});
writeToDoc(book.toJSON());
writeToDoc(book.cid);


//Backbone collections
