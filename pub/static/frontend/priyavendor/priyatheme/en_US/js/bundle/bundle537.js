require.config({"config": {
        "jsbuild":{"Magento_OfflineShipping/js/model/shipping-rates-validation-rules/freeshipping.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([], function () {\n    'use strict';\n\n    return {\n        /**\n         * @return {Object}\n         */\n        getRules: function () {\n            return {\n                'country_id': {\n                    'required': true\n                }\n            };\n        }\n    };\n});\n"}
}});
