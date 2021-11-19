#! /usr/bin/env node
const program = require('commander');

program
    .version('0.0.10', '-v, --version')
    .command('create <projectName> [type]')
    .action((projectName, type) => {
        require('../lib/command/create.js')(projectName, type);
    });

program.parse(process.argv);   