import * as winston from "winston";
const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const options = {
  console: {
    level:
      typeof corebet !== "undefined" && corebet.logLevel
        ? corebet.logLevel
        : "info",
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

const logger = winston.createLogger({
  transports: [new winston.transports.Console(options.console)],
  exitOnError: false, // do not exit on handled exceptions
  // format: winston.format.simple()
  format: combine(label({ label: "core-fet" }), timestamp(), myFormat)
});

export default logger;
