require.config({"config": {
        "jsbuild":{"Magento_Checkout/js/action/select-shipping-method.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/**\n * @api\n */\ndefine([\n    '../model/quote'\n], function (quote) {\n    'use strict';\n\n    return function (shippingMethod) {\n        quote.shippingMethod(shippingMethod);\n    };\n});\n"}
}});
