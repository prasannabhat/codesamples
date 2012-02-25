#!/usr/bin/perl
# template.pl by Prasanna Bhat
#
use strict;
use warnings;
use XML::Simple;
use Data::Dumper;
use File::Spec;
use Switch;
use Cwd;

use lib "libs";
use LibEx;


main(@ARGV);

sub main
{
	LibEx::message "Some message!";	
}

