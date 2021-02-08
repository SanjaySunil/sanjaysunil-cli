#!/usr/bin/env node
/**
 * @file index.js
 * @description Me in a CLI.
 * @author Sanjay Sunil
 */

const TerminalMenu = require('simple-terminal-menu');
const open = require('open');

const openGitHub = () => {
  open('https://github.com/sanjaysunil');
  mainMenu();
};

const openWebsite = () => {
  open('https://sanjaysunil.me');
  mainMenu();
};

const openContact = () => {
  open('mailto:sanjaysunil@protonmail.com');
  mainMenu();
};

const aboutMe = () => {
  const menu = new TerminalMenu({
    width: 80,
    x: 1,
    y: 1,
    fg: 'white',
    bg: 'black',
    padding: {
      left: 3,
      right: 3,
      top: 3,
      bottom: 3,
    },
    selected: 0,
  });

  if (menu === null) {
    console.log('Terminal is not interactive.');
    return;
  }

  menu.writeLine('SanjaySunil CLI', 'https://sanjaysunil.me');
  menu.writeSeparator();
  menu.writeLine('Hey! I\'m a 14y/o student developer studying Computer Science and specializing');
  menu.writeLine('in full-stack development.');
  menu.writeSeparator();
  menu.add('Go Back', mainMenu);
  menu.add('Exit', menu.close);
};

const mainMenu = () => {
  const menu = new TerminalMenu({
    width: 80,
    x: 1,
    y: 1,
    fg: 'white',
    bg: 'black',
    padding: {
      left: 3,
      right: 3,
      top: 3,
      bottom: 3,
    },
    selected: 0,
  });

  if (menu === null) {
    console.log('Terminal is not interactive.');
    return;
  }

  menu.writeLine('SanjaySunil CLI', 'https://sanjaysunil.me');
  menu.writeSeparator();
  menu.add('About Me', aboutMe);
  menu.add('Website', openWebsite);
  menu.add('GitHub', openGitHub);
  menu.writeSeparator();
  menu.add('Contact', openContact);
  menu.add('Exit', menu.close);
};

mainMenu();
