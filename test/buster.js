var config = module.exports;

config["mixins_take2 tests"] = {
    env: "browser",        // "browser" or "node"
    rootPath: "../",
    sources: [
        "src/**/*.js"   // Glob patterns supported
    ],
    tests: [
        "test/*-test.js"
    ]
};
