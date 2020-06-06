module.exports = {
  baseUrl: "http://localhost",
  // specs: ["./test/specs/**/*.js"],
  framework: "cucumber",
  specs: ["./test/features/**/*.feature"],
  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome"
    }
  ],
  locators: ["./pages/**/*.locator.js"]
};
