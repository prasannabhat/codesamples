require "net/http"
require "net/https"
require 'rubygems'
require 'pp'
require 'ap'

# Persistent Connections
uri = URI('http://site1.way2sms.com/content/index.html')
#Display URI fields
ap uri
# ap uri.path
# ap uri.request_uri


# Net::HTTP.start(uri.host, uri.port) do |http|
  # request = Net::HTTP::Get.new uri.request_uri
  # res = http.request request # Net::HTTPResponse object
  # #Print only the response header
  # ap res.to_hash
  # #Print complete response
  # #ap res
# end

#################### Redirection ###################################
def fetch(uri_str, limit = 10)
  # You should choose a better exception.
  raise ArgumentError, 'too many HTTP redirects' if limit == 0

  response = Net::HTTP.get_response(URI(uri_str))

  case response
  when Net::HTTPSuccess then
    response
  when Net::HTTPRedirection then
    location = response['location']
    warn "redirected to #{location}"
    fetch(location, limit - 1)
  else
    response.value
  end
end

# print fetch('http://site1.way2sms.com/content/')
###################################################################


############# POST ###############################################
# uri = URI('http://www.example.com/todo.cgi')
# req = Net::HTTP::Post.new(uri.path)
# req.set_form_data('from' => '2005-01-01', 'to' => '2005-03-31')

# res = Net::HTTP.start(uri.host, uri.port) do |http|
  # http.request(req)
# end

# case res
# when Net::HTTPSuccess
	# #Print response header
	# ap res.to_hash
# when Net::HTTPRedirection
	# location = res['location']
	# warn "redirected to #{location}"
	# fetch(location,10)
  # # OK
# else
  # res.value
# end
###################################################################

############# Setting Headers #####################################
# uri = URI('http://example.com/cached_response')
# file = File.stat 'cached_response'

# req = Net::HTTP::Get.new(uri.request_uri)
# req['If-Modified-Since'] = file.mtime.rfc2822

# res = Net::HTTP.start(uri.hostname, uri.port) {|http|
  # http.request(req)
# }

# open 'cached_response', 'w' do |io|
  # io.write res.body
# end if res.is_a?(Net::HTTPSuccess)
###################################################################


############### BASIC AUTHENTICATION ##############################
uri = URI('http://example.com/index.html?key=value')

req = Net::HTTP::Get.new(uri.request_uri)
req.basic_auth 'user', 'pass'

res = Net::HTTP.start(uri.host, uri.port) {|http|
  http.request(req)
}
puts res.body
###################################################################