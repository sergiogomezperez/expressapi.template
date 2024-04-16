require('dotenv').config();
const yargs = require('yargs');
const databaseHelper = require('./database/databaseHelper');
const options = yargs
    .usage('Usage: --op <operation_name>')
    .option('op', { alias: 'operation', describe: 'operation name', type: 'string', demandOption: false })

async function main() {
    console.log(`You have selected: ${options.op}`);
    try {
        switch (yargs.argv['op']) {
            case 'init':
                // ▶️ node . --op init
                console.log('Connecting...');
                await databaseHelper.authenticate();
                console.log('Connection has been established successfully.');
                console.log('Initializing environment...');
                await databaseHelper.syncAllModels(true);
                break;
            default:
                console.log('Use --help to view options.');
                break;
        }
        console.log('Finished.');
    } catch (error) {
        console.log(error);
    }
}

main();
