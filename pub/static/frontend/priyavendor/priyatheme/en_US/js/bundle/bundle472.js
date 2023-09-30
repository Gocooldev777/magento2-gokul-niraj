require.config({"config": {
        "jsbuild":{"Magento_Customer/js/logout-redirect.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'jquery',\n    'mage/mage'\n], function ($) {\n    'use strict';\n\n    return function (data) {\n        $($.mage.redirect(data.url, 'assign', 5000));\n    };\n});\n"}
}});
