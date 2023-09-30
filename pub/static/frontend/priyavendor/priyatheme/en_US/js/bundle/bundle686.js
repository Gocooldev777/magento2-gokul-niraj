require.config({"config": {
        "jsbuild":{"Magento_Ui/js/core/app.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\ndefine([\n    './renderer/types',\n    './renderer/layout',\n    '../lib/knockout/bootstrap'\n], function (types, layout) {\n    'use strict';\n\n    return function (data, merge) {\n        types.set(data.types);\n        layout(data.components, undefined, true, merge);\n    };\n});\n"}
}});
