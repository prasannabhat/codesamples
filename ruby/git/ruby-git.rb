require 'rubygems'
require 'git' 
require 'ap'
require 'pp'

repo = "D:/gitrepos/Development/Dev_ComStack_Ar40"
g = Git.open repo

#puts g.log

branches = g.branches[:b_integration]
puts branches
#pp branches
#ap branches

