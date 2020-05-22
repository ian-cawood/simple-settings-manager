#!/usr/bin/env node
const yargs = require('yargs')

const init = require('./src/commands/init')

yargs
  .command(init)
  .help()
  .argv
