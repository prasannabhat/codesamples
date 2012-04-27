
#!/usr/bin/ruby -w

require 'rubygems'
require 'rexml/document'
#gem install awesome_print
require 'ap'
require "pp"
include REXML

doc = Document.new File.new("mydoc.xml")
doc.elements.each("inventory/section") { |element| puts element.attributes["name"] }
# -> health
# -> food
doc.elements.each("//section/item") { |element| puts element.attributes["upc"] }
# -> 123456789
# -> 445322344
# -> 485672034
# -> 132957764
root = doc.root
puts root.attributes["title"]
# -> OmniCorp Store #45x10^3
puts root.elements["section/item[@stock='44']"].attributes["upc"]
# -> 132957764
puts root.elements["section"].attributes["name"] 
# -> health (returns the first encountered matching element) 
puts root.elements[1].attributes["name"] 
# -> health (returns the FIRST child element) 
root.detect {|node| node.kind_of? Element and node.attributes["name"] == "food" }


# Using XPath
# The invisibility cream is the first <item>
invisibility = XPath.first( doc, "//item" ) 
# Prints out all of the prices
XPath.each( doc, "//price") { |element| puts element.text }
# Gets an array of all of the "name" elements in the document.
names = XPath.match( doc, "//name" )
p names