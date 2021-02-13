const { writeFile, existsSync, mkdirSync } = require('fs');
const { argv } = require('yargs');
const envDirectory = './src/environments';

require('dotenv').config();

const environment = argv.environment;

function writeFileUsingFS(targetPath, environmentFileContent) {
  // tslint:disable-next-line: only-arrow-functions
  writeFile(targetPath, environmentFileContent, function(error) {
    if (error) {
      console.log('err', error);
    }

    if (environmentFileContent !== '') {
      console.log(`wrote variables to ${targetPath}`);
    }
  });
}

if (!existsSync(envDirectory)) {
  mkdirSync(envDirectory);
}

writeFileUsingFS('./src/environments/environment.prod.ts', '');
writeFileUsingFS('./src/environments/environment.ts', '');

const isProduction = environment === 'prod';
const target = isProduction
  ? './src/environments/environment.prod.ts'
  : './src/environments/environment.ts';

const fileContent = `
  export const environment = {
    production: ${isProduction},
    API_URL: '${process.env.API_URL}',
    APP_ID: '${process.env.APP_ID}'
  };
`;

writeFileUsingFS(target, fileContent);
