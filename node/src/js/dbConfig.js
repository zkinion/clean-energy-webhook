module.exports = {
    development: {
        username: 'cleanenergy',
        password: process.env.DBPass,
        database: process.env.Database,
        host: process.env.DBHost,
        dialect: 'mysql',
        logging: false,
        //dialectModulePath: 'mysql2-xray',
    },

    // This funny thing about this, is it's always using "development", since the node_env is always null, what changes is the env
    // dbpass and stuff.
    test: {
        username: 'cleanenergy',
        password: '66oaux]*AvLyD;iN0VK7#*8L^N~qb|',
        database: 'cleanenergy',
        host: 'cscozx26a19ozh.cozbfkzshg3k.us-west-2.rds.amazonaws.com',
        dialect: 'mysql',
        logging: false,
    },
    staging: {
        username: 'cleanenergy',
        password: 'o5NKpeZ<KXd8eP_A5J8!e)QwhuVw#S',
        database: 'cleanenergy',
        host: 'cleanenergy-stack-staging-standardauroradbcluster-1fnrx0ajrfeex.cluster-cozbfkzshg3k.us-west-2.rds.amazonaws.com',
        dialect: 'mysql',
        logging: false,
        // dialectModulePath: 'mysql2-xray',
    },
    production: {
        username: 'cleanenergy',
        password: '8IyrQBdN5XqtuDOl*I66dd@O2CrJvV1j',
        database: 'cleanenergy',
        host: 'cleanenergy-stack-prod-standardauroradbcluster-4o6wgmea14n0.cluster-cozbfkzshg3k.us-west-2.rds.amazonaws.com',
        dialect: 'mysql',
        logging: false,
        // dialectModulePath: 'mysql2-xray',
    },
};
