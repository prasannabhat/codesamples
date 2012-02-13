#!/usr/bin/perl
# template.pl by Prasanna Bhat
#

use strict;
use warnings;
use XML::Simple;
use Data::Dumper;
use File::Spec;

package LibEx;

sub message {
    my $m = shift or return;
    print("$m\n");
}

sub error {
    my $e = shift || 'unkown error';
    print("$0: $e\n");
    exit 0;
}

1;