require.config({"config": {
        "jsbuild":{"Magento_Checkout/js/view/cart/totals/shipping.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'Magento_Checkout/js/view/summary/shipping',\n    'Magento_Checkout/js/model/quote'\n], function (Component, quote) {\n    'use strict';\n\n    return Component.extend({\n\n        /**\n         * @override\n         */\n        isCalculated: function () {\n            return !!quote.shippingMethod();\n        }\n    });\n});\n"}
}});
