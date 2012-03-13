require 'rubygems'
require 'git' 
require 'ap'
require 'pp'


#repo = "E:/gitrepos/Testing/jquery-mobile"
repo = "D:/gitrepos/BCTRepos/Dev_ComStack_Ar40"
#remo = "E:/gitrepos/Testing/bare"
g = Git.open repo

#puts g.log

branches = g.branches
# puts g.command 'fsck'
puts g.command 'branch'
# puts g.command 'tag'
remotes = g.remotes
remote = g.remote 'origin'
puts "Remote repository is #{remote.url}"
r = Git.bare remote.url
#r.set_working remote.url
puts r
puts "Remote path is #{r.repo}"
puts r.command 'branch'

# g.command 'gc'

# remotes = g.remotes
# puts remotes

# g.fsck
#pp branches
#ap branches

