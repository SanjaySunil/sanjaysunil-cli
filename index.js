#!/usr/bin/env node
/**
 * @file index.js
 * @author Sanjay Sunil
 * @license MIT
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
  menu.writeLine('Hey! I\'m a student developer studying Computer Science ');
  menu.writeLine('and specializing in full-stack development.\n');
  menu.writeLine('Some technologies I enjoy working with include React, Node and Firebase.\n');
  menu.writeLine('I love creating software, exploring new technologies');
  menu.writeLine('and spending my free time contributing to the open-source community.');

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
