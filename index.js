#!/usr/bin/env node
/**
 * @file index.js
 * @description Me in a CLI.
 * @author Sanjay Sunil
 */

const TerminalMenu = require("simple-terminal-menu");
const open = require("open");

/**
 * @description Open GitHub
 */

const openGitHub = () => {
  open("https://github.com/D3VSJ");
  mainMenu();
}

/**
 * @description Open Website
 */

const openWebsite = () => {
  open("https://sanjaysunil.me");
  mainMenu();
}

/**
 * @description Open Contact
 */

const openContact = () => {
  open("mailto:D3VSJ@protonmail.com");
  mainMenu();
}

/**
 * @description About Me
 */

const aboutMe = () => {
  const menu = new TerminalMenu({
    width: 80,
    x: 1, 
    y: 1,
    fg: "white", 
    bg: "none", 
    padding: {
      left: 3, 
      right: 3, 
      top: 3, 
      bottom: 3,
    },
    selected: 0, 
  });

  /**
   * @description If the terminal is not interactive, this is displayed.
   */

  if (menu === null) {
    console.log("Terminal is not interactive.");
    return;
  }

  menu.writeLine("SanjaySunil CLI", "https://sanjaysunil.me");
  menu.writeSeparator();
  menu.writeLine(
    "Hey! I'm a 14y/o student developer studying Computer Science and specializing"
  );
  menu.writeLine("in full-stack development.");
  menu.writeSeparator();
  menu.add("Go Back", mainMenu);
  menu.add("Exit", menu.close);
}

/**
 * @description Main Menu
 */

const mainMenu = () => {
  const menu = new TerminalMenu({
    width: 80,
    x: 1,
    y: 1,
    fg: "white",
    bg: "black",
    padding: {
      left: 3,
      right: 3,
      top: 3,
      bottom: 3,
    },
    selected: 0,
  });

  /**
   * @description If the terminal is not interactive, this is displayed.
   */

  if (menu === null) {
    console.log("Terminal is not interactive.");
    return;
  }

  menu.writeLine("SanjaySunil CLI", "https://sanjaysunil.me");
  menu.writeSeparator();
  menu.add("About Me", aboutMe);
  menu.add("Website", openWebsite);
  menu.add("GitHub", openGitHub);
  menu.writeSeparator();
  menu.add("Contact", openContact);
  menu.add("Exit", menu.close);
}

mainMenu();
