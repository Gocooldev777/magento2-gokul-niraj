require.config({"config": {
        "jsbuild":{"Magento_Translation/js/mage-translation-dictionary.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'text!js-translation.json'\n], function (dict) {\n    'use strict';\n\n    return JSON.parse(dict);\n});\n"}
}});
