require 'rubygems'
require 'git' 
require 'ap'
require 'pp'


repo = "E:/gitrepos/Testing/jquery-mobile"
remo = "E:/gitrepos/Testing/bare"
g = Git.open repo

#puts g.log

branches = g.branches
# puts g.command 'fsck'
puts g.command 'branch'
# puts g.command 'tag'
remotes = g.remotes
remote = g.remote 'origin'
puts "Remote repository is #{remote.url}"
r = Git.open remo
puts r

# g.command 'gc'

# remotes = g.remotes
# puts remotes

# g.fsck
#pp branches
#ap branches

