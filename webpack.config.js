const path = require("path");
const webpackconfig = Object.assign(
    {},
    require("@masx200/webpack-react-vue-spa-awesome-config")
);

if ("production" === process.env.NODE_ENV) {
    webpackconfig.entry = [
        require.resolve("@masx200/ie11-usual-polyfills"),

        path.join(__dirname, "./src", "polyfill.js"),

        ...webpackconfig.entry,
    ];
}

console.log(webpackconfig);
module.exports = webpackconfig;
