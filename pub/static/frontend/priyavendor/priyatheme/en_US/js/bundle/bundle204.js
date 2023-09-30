require.config({"config": {
        "jsbuild":{"less/config.less.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/*eslint no-unused-vars: [\"error\", { \"vars\": \"local\" }]*/\n/*global less:true*/\n\nless = {\n    env: 'development',\n    logLevel: 0,\n    async: true,\n    fileAsync: true,\n    poll: 3000,\n    useFileCache: false,\n    dumpLineNumbers: 'mediaquery'\n};\n"}
}});
