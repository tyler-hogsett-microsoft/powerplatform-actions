// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import cp = require('child_process');
import path = require('path');
import process = require('process');

process.env['INPUT_ENVIRONMENT-URL'] = new URL(process.env['PA_BT_ORG_URL'] ?? 'https://davidjenD365-1.crm.dynamics.com').href;
process.env['INPUT_USER-NAME'] = process.env['PA_BT_ORG_USER'] ?? 'davidjen@davidjenD365.onmicrosoft.com';

const password = process.env['PA_BT_ORG_PASSWORD'] ?? '';
if (!password || password.length === 0) {
    throw new Error('Missing password! Specify one by setting env variable: PA_BT_ORG_PASSWORD');
}
process.env['INPUT_PASSWORD-SECRET'] = password;
process.env['INPUT_SOLUTION-NAME'] = 'emptySolution';
process.env['INPUT_SOLUTION-FILE'] = path.resolve(__dirname, '..', '..', '..', 'src', 'test', 'data', 'emptySolution_0_1_0_0.zip');
// process.env['INPUT_WORKING-DIRECTORY'] = path.resolve(__dirname, '..', '..', 'out', 'launch');
// process.env['INPUT_ACTIVATE-PLUGINS'] = 'true';
process.env['INPUT_FORCE-OVERWRITE'] = 'true';
// process.env['INPUT_SKIP-DEPENDENCY-CHECK'] = 'false';
// process.env['INPUT_IMPORT-AS-HOLDING'] = 'false';
// process.env['INPUT_PUBLISH-CHANGES'] = 'true';
process.env['INPUT_RUN-ASYNCHRONOUSLY'] = 'false';

const pathToAction = path.join(__dirname, 'index.js');
process.env['RUNNER_DEBUG'] = '1';
cp.execSync(`node ${pathToAction}`, { stdio: 'inherit'});
