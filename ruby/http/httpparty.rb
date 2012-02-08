#dir = File.expand_path(File.join(File.dirname(__FILE__), '..', 'lib'))
#require File.join(dir, 'httparty')
require 'rubygems'
require 'httparty'

USERAGENT = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.63 Safari/535.7'

class TripIt
  include HTTParty
  base_uri 'http://site3.way2sms.com/content/index.html'
  #base_uri 'http://wwwa.way2sms.com/auth.cl'
  #base_uri 'http://site5.way2sms.com/Main.action?id=1E79DC49D02E8D456FA5FC9097C4504B.w814'
  debug_output

  def initialize(email, password)
    @email = email
	

	response = self.class.post(
      '',
      :body => {
		:username => email,
		:password => password
      },
      :headers => {
		'Referer' => 'http://wwwg.way2sms.com//entry.jsp',
		  'Content-Type' => 'application/x-www-form-urlencoded',
		  'User-Agent' => USERAGENT,
		  'Content-Length' => '43',
		  'Accept' => '*/*'
	  }
    )
	File.open("index_response.html", "w+") do |aFile|
			aFile.syswrite(response.body)
	end
    @cookie = response.request.options[:headers]['Cookie']
	print response.headers.to_hash.inspect	
	
	

  end

  def account_settings
    self.class.get('/account/edit', :headers => {'Cookie' => @cookie})
  end

  def logged_in?
    account_settings.include? "You're logged in as #{@email}"
  end
end

tripit = TripIt.new('9880362090', 'amrutaprasanna')
#puts "Logged in: #{tripit.logged_in?}"