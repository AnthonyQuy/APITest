"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winston = require("winston");
var _a = winston.format, combine = _a.combine, timestamp = _a.timestamp, label = _a.label, printf = _a.printf;
var myFormat = printf(function (_a) {
    var level = _a.level, message = _a.message, label = _a.label, timestamp = _a.timestamp;
    return timestamp + " [" + label + "] " + level + ": " + message;
});
var options = {
    console: {
        level: typeof corebet !== "undefined" && corebet.logLevel
            ? corebet.logLevel
            : "info",
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};
var logger = winston.createLogger({
    transports: [new winston.transports.Console(options.console)],
    exitOnError: false,
    // format: winston.format.simple()
    format: combine(label({ label: "core-fet" }), timestamp(), myFormat)
});
exports.default = logger;
