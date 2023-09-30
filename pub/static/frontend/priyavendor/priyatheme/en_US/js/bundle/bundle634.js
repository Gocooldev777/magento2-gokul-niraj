require.config({"config": {
        "jsbuild":{"Magento_Review/js/validate-review.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'jquery',\n    'jquery/validate',\n    'mage/translate'\n], function ($) {\n    'use strict';\n\n    $.validator.addMethod(\n        'rating-required', function (value) {\n            return value !== undefined;\n        }, $.mage.__('Please select one of each of the ratings above.'));\n});\n"}
}});
