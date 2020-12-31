#!/usr/bin/env node
/**
 * @file index.js
 * @description Me in a CLI.
 * @author Sanjay Sunil
 */

const chalk = require("chalk");
const TerminalMenu = require("simple-terminal-menu");
const open = require("open");

/**
 * @description About Me
 */

function aboutMe() {
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

  if (menu === null) {
    // In case the terminal is not interactive the result is null
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
 * @description Open GitHub
 */

function openGitHub() {
  open("https://github.com/D3VSJ");
  mainMenu();
}

/**
 * @description Open Website
 */

function openWebsite() {
  open("https://sanjaysunil.me");
  mainMenu();
}

/**
 * @description Main Menu
 */

function mainMenu() {
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

  if (menu === null) {
    // In case the terminal is not interactive the result is null
    console.log("Terminal is not interactive.");
    return;
  }
  menu.writeLine("SanjaySunil CLI", "https://sanjaysunil.me");
  menu.writeSeparator();
  menu.add("About Me", aboutMe);
  menu.add("Website", openWebsite);
  menu.add("GitHub", openGitHub);
  menu.writeSeparator();
  menu.add("Exit", menu.close);
}

mainMenu();
