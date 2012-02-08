require "net/http"
require "net/https"
require 'rubygems'
require 'pp'
require 'ap'

# #Get by URI
# uri = URI('http://example.com/index.html?count=10')
# res = Net::HTTP.get(uri) # => String

# # GET with Dynamic Parameters
# uri = URI('http://example.com/index.html')
# params = { :limit => 10, :page => 3 }
# uri.query = URI.encode_www_form(params)

# res = Net::HTTP.get_response(uri)
# ap res

# #Post 
# uri = URI('http://www.example.com/search.cgi')
# res = Net::HTTP.post_form(uri, 'q' => 'ruby', 'max' => '50')
# ap res

#POST with Multiple Values
uri = URI('http://www.example.com/search.cgi')
res = Net::HTTP.post_form(uri, 'q' => ['ruby', 'perl'], 'max' => '50')
ap res