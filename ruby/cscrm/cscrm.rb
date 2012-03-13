require "net/http"
require "net/https"
require 'rubygems'
require 'pp'
require 'ap'

# uri = URI('http://example.com/index.html')
# params = { :limit => 10, :page => 3 }
# uri.query = URI.encode_www_form(params)

# res = Net::HTTP.get_response(uri)

uri = URI('http://abt-cscrm.de.bosch.com/cqweb/restapi/CSCRM/CSCRM')

Net::HTTP.start(uri.host, uri.port) do |http|
  params = { :format => 'XML', :loginId => 'pbt2kor' , :password => 'amrutaprasanna'}
  #uri.query = "format=XML&loginId=pbt2kor&password=amrutaprasanna"
  uri.query = URI.encode_www_form(params)
  puts "Request URI is #{uri.request_uri}"
  
  #Login
  request = Net::HTTP::Get.new uri.request_uri
  response = http.request request # Net::HTTPResponse object
  puts response
  
  case response
  
  when Net::HTTPOK then
    puts "Suscess"
  when Net::HTTPInternalServerError then
	puts "Internal Server Error"
	else
    puts "Default"
  end
  
  # recordUri = URI('http://abt-cscrm.de.bosch.com/cqweb/restapi/CSCRM/CSCRM/RECORD')
  # cscrm = 'CSCRM00390342'
  # params = { :format => 'XML', :noframes => 'true'}
  # recordUri.path = recordUri.path + "/" + cscrm
  # recordUri.query = URI.encode_www_form(params)
  # puts "Request URI is #{recordUri.request_uri}"
  # request = Net::HTTP::Get.new recordUri.request_uri
  # response = http.request request # Net::HTTPResponse object
  
response = Net::HTTP.get(URI('http://abt-cscrm.de.bosch.com/cqweb/restapi/CSCRM/CSCRM/RECORD/CSCRM00390342?format=XML&loginId=pbt2kor&password=amrutaprasanna&noframes=true')) # => String
  
  puts response
  
  case response
  
  when Net::HTTPOK then
    puts "Suscess"
  when Net::HTTPInternalServerError then
	puts "Internal Server Error"
	else
    puts "Default"
  end  
  
  
  
end

  
