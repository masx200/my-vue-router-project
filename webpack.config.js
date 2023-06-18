const path = require("path");
const {
    createconfig,
} = require("@masx200/webpack-react-vue-spa-awesome-config");

module.exports = (env, argv) => {
    const webpackconfig = createconfig(env, argv);

    if ("production" === process.env.NODE_ENV) {
        webpackconfig.entry = [
            path.join(__dirname, "./src", "polyfill.js"),

            ...webpackconfig.entry,
        ];
        // webpackconfig.devtool = "source-map";
    }
    if (process.env.NODE_ENV == "development") {
        webpackconfig.experiments = {
            ...webpackconfig.experiments,
            lazyCompilation: true,
        };
    }
    //console.log(webpackconfig.resolve);
    webpackconfig.resolve = Object.assign(webpackconfig.resolve, {
        fallback: { os: require.resolve("os-browserify/browser") },
    });
    return webpackconfig;
};
