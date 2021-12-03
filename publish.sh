#!/bin/bash

# Builds and publishes the website

./build.sh
sftp -b publish.batch u68656804@home412586854.1and1-data.host
