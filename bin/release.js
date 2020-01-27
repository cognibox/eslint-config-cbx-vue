/* global require, __dirname */

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const basePath = path.resolve(__dirname, '..');
const { execSync } = require('child_process');
const pkgPath = path.resolve(basePath, 'package.json');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'version',
      message: 'Which version you want to release (ex: 1.0.0)?',
    },
    {
      type: 'input',
      name: 'remote',
      message: 'Which remote you want to push (ex: origin, upstream)?',
    },
  ])
  .then((answers) => {
    const packageJson = require(pkgPath);
    packageJson.version = answers.version;
    const remote = answers.remote;
    const packageJsonIndent = 2;

    fs.writeFileSync(pkgPath, JSON.stringify(packageJson, null, packageJsonIndent), 'utf8');

    execSync(`npm install && git commit -am "release ${answers.version}" && git push ${remote} HEAD:master`);
    execSync(`git tag ${answers.version} && git push ${remote} ${answers.version}`);
    execSync(`npm publish --tag ${answers.version}`);
  });
