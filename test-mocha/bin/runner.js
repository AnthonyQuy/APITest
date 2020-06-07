#!/usr/bin/env node

process.env.NODE_ENV = process.env.NODE_ENV || 'test'
require("@babel/register");
require('../lib/cli/cli.js')
