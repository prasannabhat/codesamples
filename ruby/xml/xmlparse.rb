
#!/usr/bin/ruby -w

require 'rubygems'
require 'rexml/document'
#gem install awesome_print
require 'ap'
require "pp"
include REXML

xmlfile = File.new("movies.xml")
xmldoc = Document.new(xmlfile)

# Now get the root element
root = xmldoc.root
puts "Root element : " + root.attributes["shelf"]

# This will output all the movie titles.
xmldoc.elements.each("collection/movie"){ 
   |e| puts "Movie Title : " + e.attributes["title"] 
}

# This will output all the movie types.
xmldoc.elements.each("collection/movie") do |e|
puts "Movie Type : " + e.elements["type"].text
# pp e
end

# This will output all the movie description.
# xmldoc.elements.each("collection/movie/description") {
#    |e| puts "Movie Description : " + e.text 
# }