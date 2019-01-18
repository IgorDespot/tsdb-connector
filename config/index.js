"use strict";

require('dotenv').config();

const bunyan = require("bunyan");

var log = {
    development: function() {
        return bunyan.createLogger({
            name: "TSDB-Connector-development",
            streams: [{
                path: './tsdb-connector.log',
            },
            {
                level: 'debug',
                stream: process.stdout
            }
        ],
        });
    }
};

module.exports = {
    log: function(env) {
        if (env) {
            return log[env]();
        }
        return log[process.env.NODE_ENV || "development"]();
    }
}