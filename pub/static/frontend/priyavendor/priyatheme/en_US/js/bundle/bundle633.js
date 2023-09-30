require.config({"config": {
        "jsbuild":{"Magento_Review/js/submit-review.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'jquery'\n], function ($) {\n    'use strict';\n\n    return function (config, element) {\n        $(element).on('submit', function () {\n            if ($(this).valid()) {\n                $(this).find('.submit').attr('disabled', true);\n            }\n        });\n    };\n});\n"}
}});
