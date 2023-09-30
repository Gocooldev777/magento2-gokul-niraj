require.config({"config": {
        "jsbuild":{"Magento_Tax/js/view/checkout/cart/totals/grand-total.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/**\n * @api\n */\n\ndefine([\n    'Magento_Tax/js/view/checkout/summary/grand-total'\n], function (Component) {\n    'use strict';\n\n    return Component.extend({\n        /**\n         * @override\n         */\n        isDisplayed: function () {\n            return true;\n        }\n    });\n});\n"}
}});
