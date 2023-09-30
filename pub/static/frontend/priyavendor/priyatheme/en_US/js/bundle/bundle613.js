require.config({"config": {
        "jsbuild":{"Magento_ProductAlert/js/form-submitter.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'jquery'\n], function ($) {\n    'use strict';\n\n    return function (data, element) {\n\n        $(element).trigger('submit');\n    };\n});\n"}
}});
