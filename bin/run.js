"use strict";

require("dotenv").config();

const log = require("../config").log();
const service = require("../server/service")();
const http = require("http");

const server = http.createServer(service);

server.listen(process.env.PORT || 3000);
server.on("listening", function() {
    log.info(`TSDB-Connector is listening on ${server.address().port} in ${service.get('env')} mode.`)
})
