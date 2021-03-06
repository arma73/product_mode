"use-strict";

// Core
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

/**
 * Recognizes certain classes of webpack errors and cleans, aggregates
 * and prioritizes them to provide a better Developer Experience
 */
module.exports = () => [
    new FriendlyErrorsWebpackPlugin()
];
