#!/usr/bin/env ts-node

import endPoints from './node-endpoints.json';

const buildScript = async () => {
    console.log('running the type generation script...');
    endPoints.forEach((i) => {
        console.log(i);
    });
};

// script entry point
(async () => {
    await buildScript();

    process.exit(0);
})().catch((err) => {
    console.error(`ERROR: ${err}`);
    process.exit(1);
});
