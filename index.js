import inquirer from 'inquirer';
import fs from 'fs';
import { generateMarkdown } from './utils/generateMarkdown.js';

const questions = [
  { type: 'input', name: 'title', message: 'What is the title of your project?' },
  { type: 'input', name: 'description', message: 'Provide a short description of your project:' },
  { type: 'input', name: 'installation', message: 'What are the installation instructions?' },
  { type: 'input', name: 'usage', message: 'Provide instructions and examples for use:' },
  { type: 'input', name: 'contributing', message: 'What are the guidelines for contributing to this project?' },
  { type: 'input', name: 'tests', message: 'What are the test instructions?' },
  { type: 'list', name: 'license', message: 'What is the license for this project?', choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'] },
  { type: 'input', name: 'github', message: 'What is your GitHub username?' },
  { type: 'input', name: 'email', message: 'What is your email address?' },
];

function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, generateMarkdown(data));
  console.log('README.md has been generated!');
}

async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    writeToFile('README.md', answers);
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

init();
