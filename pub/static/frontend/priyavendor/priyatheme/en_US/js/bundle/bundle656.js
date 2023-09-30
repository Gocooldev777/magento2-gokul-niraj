require.config({"config": {
        "jsbuild":{"Magento_SendFriend/js/back-event.js":"/**\n* Copyright \u00a9 Magento, Inc. All rights reserved.\n* See COPYING.txt for license details.\n*/\n\ndefine([\n    'jquery'\n], function ($) {\n    'use strict';\n\n    return function (config, element) {\n        $(element).on('click', function () {\n            history.back();\n\n            return false;\n        });\n    };\n});\n"}
}});
