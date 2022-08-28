#!/usr/bin/env node
/**
 * @file index.js
 * @author Sanjay Sunil
 * @license MIT
 */

const TerminalMenu = require('simple-terminal-menu');
const open = require('open');
const locales = require('./en_GB.json');

const openGitHub = () => {
  open(locales.github);
  mainMenu();
};

const openWebsite = () => {
  open(locales.website);
  mainMenu();
};

const openContact = () => {
  open(`mailto:${locales.email}`);
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
    console.log(locales.errors.terminalNotInteractive);
    return;
  }

  menu.writeLine(locales.title, locales.website);
  menu.writeSeparator();
  locales.about.forEach((message) => {
    menu.writeLine(message);
  });

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

  menu.writeLine(locales.title, locales.website);
  menu.writeSeparator();
  menu.add('About Me', aboutMe);
  menu.add('Website', openWebsite);
  menu.add('GitHub', openGitHub);
  menu.writeSeparator();
  menu.add('Contact', openContact);
  menu.add('Exit', menu.close);
};

mainMenu();
