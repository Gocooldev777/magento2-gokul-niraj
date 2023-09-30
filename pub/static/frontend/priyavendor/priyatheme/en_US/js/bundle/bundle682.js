require.config({"config": {
        "jsbuild":{"Magento_Translation/js/add-class.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine(['jquery'], function ($) {\n    'use strict';\n\n    return function (config, element) {\n        $(element).addClass(config.class);\n    };\n});\n"}
}});
