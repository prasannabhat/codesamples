require 'rubygems'
require 'smtp-tls'
require 'net/smtp'

require 'win32ole'
require 'ap'
require 'pp'

#smtp = Net::SMTP.new 'SGPMBX01.APAC.bosch.com', 135
smtp = Net::SMTP.new 'SGPMBX01.APAC.bosch.com', 135
smtp.enable_starttls
username = "APAC\pbt2kor"
password = "jjRrhb2370$"
from = "prasanna.bhat@in.bosch.com"
to = "prasanna.bhat@in.bosch.com"

msg = <<MESSAGE_END
From: Private Person <me@fromdomain.com>
To: A Test User <test@todomain.com>
Subject: SMTP e-mail test

This is a test e-mail message.
MESSAGE_END

smtp.start(Socket.gethostname,username,password,:login) do |server|
   server.send_message msg, from, to
end