const cp = require('child_process');
const spawnProcess = cp.spawn;
const execSync = cp.execSync;
const ENV = require('./.env');

/**
 * PREREQUISITES
 * To run this script you will need the following installed:
 *  - Node.js and npm
 *    - For building and compiling the web client frontend
 *    - For general scripting (e.g. this file)
 *  - AWS CLI
 *    - For deploying web client frontend to S3
 *  - Terraform 0.12.8 or later
 *    - For provisioning infrastructure
 */


// VARIABLES
/** Directory containing the web client source */
const WEB_CLIENT_DIR = `web-client`;
/** Directory containing the output of the web client build step */
const WEB_CLIENT_BUILD_DIR = `${WEB_CLIENT_DIR}/build`;
/** Directory containing the dev environment Terraform config */
const TERRAFORM_DEV_DIR = `terraform/dev`;
/** The root directory of this project */
const ROOT_DIR = process.cwd();

// Assign ENV json into environment variables
Object.assign(process.env, ENV);

async function main() {
  // PREPARE APPLICATION COMPONENTS
  // 1. Build web client
  process.chdir(WEB_CLIENT_DIR);
  await exec('npm ci');
  await exec('npm run build');
  process.chdir(ROOT_DIR);


  // SETUP ENVIRONMENT
  // 1. Setup environment with Terraform
  process.chdir(TERRAFORM_DEV_DIR);
  await exec('terraform init');
  await exec(['terraform', 'apply',
    '-auto-approve',
    '-var', `aws_access_key=${process.env.AWS_ACCESS_KEY_ID}`,
    '-var', `aws_secret_key=${process.env.AWS_SECRET_ACCESS_KEY}`
  ]);
  // Read outputs from Terraform into JS
  const tfOutputs = JSON.parse(execSync('terraform output --json').toString());
  console.log(`Terraform outputs: `, tfOutputs);
  process.chdir(ROOT_DIR);


  // DEPLOY APPLICATIONS
  // 1. Deploy web client to s3 bucket
  if (tfOutputs.s3_bucket_name.value) {
    process.chdir(WEB_CLIENT_BUILD_DIR);
    // Use AWS CLI to sync the build folder with the S3 bucket
    await exec(['aws', 's3',
      'sync', './', `s3://${tfOutputs.s3_bucket_name.value}`,
      '--acl', 'public-read'
    ]);
    process.chdir(ROOT_DIR);
  } else {
    errorAndExit(`Terraform did not output the expected value 's3_bucket_name': ${tfOutputs.s3_bucket_name}`);
  }

  console.log("Finished processing successfully.");
}
main();


/**
 * Execute a command in the native runtime i.e. linux / osx / windows
 * @param {string} fullCommand Full command to execute, including arguments
 */
async function exec(fullCommand) {
  let shellCommand, args;
  if (typeof fullCommand === 'string') {
    // Split up args by space
    [shellCommand, ...args] = fullCommand.split(/\s+/);
  } else if (Array.isArray(fullCommand)) {
    // Command and args are specified by an array
    shellCommand = fullCommand[0];
    args = fullCommand.slice(1);
  } else {
    throw new Error("Unrecognised command format: " + fullCommand);
  }


  // Execute command as a child process but still wait until
  //  it has finished processing
  await new Promise((resolve, reject) => {
    // Create process
    let childProcess = spawnProcess(shellCommand, args);
    // Pipe
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);

    // Promisify pipe 'close' and 'error' signals
    childProcess.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject();
      }
    });
    childProcess.on('error', (err) => reject(err));
  });
}

/**
 * Log an error message and exit with non-zero exit code
 * @param {string} message Error message to log before exiting
 */
function errorAndExit(message) {
  console.error(` *** ERROR: ${message}. Exiting...`);
  process.exit(1);
}
