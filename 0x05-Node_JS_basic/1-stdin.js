#!/usr/bin/node
/**
 * ask for input from the commandline
 */

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const strInput = process.stdin.read();

  if (strInput) {
    process.stdout.write(`Your name is: ${strInput}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
