#!/bin/sh


DIRLIST="cert images data temp themes/default"

for dir in $DIRLIST; do
	chmod -Rvf 777 "upload/$dir"
done;

