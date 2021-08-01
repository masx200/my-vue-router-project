const path = require("path");
const {
    createconfig,
} = require("@masx200/webpack-react-vue-spa-awesome-config");

module.exports = (env, argv) => {
    const config = createconfig(env, argv);
    const webpackconfig = config;
    if ("production" === process.env.NODE_ENV) {
        webpackconfig.entry = [
            require.resolve("@masx200/ie11-usual-polyfills"),

            path.join(__dirname, "./src", "polyfill.js"),

            ...webpackconfig.entry,
        ];
        // webpackconfig.devtool = "source-map";
    }

    console.log(webpackconfig);
    return webpackconfig;
};
