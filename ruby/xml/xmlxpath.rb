
#!/usr/bin/ruby -w

require 'rubygems'
require 'rexml/document'
include REXML

xmlfile = File.new("movies.xml")
xmldoc = Document.new(xmlfile)

# Info for the first movie found
movie = XPath.first(xmldoc, "//movie")
p movie

# Print out all the movie types
XPath.each(xmldoc, "//type") { |e| puts e.text }

# Get an array of all of the movie formats.
names = XPath.match(xmldoc, "//format").map {|x| x.text }
# names = XPath.match(xmldoc, "//format")
p names