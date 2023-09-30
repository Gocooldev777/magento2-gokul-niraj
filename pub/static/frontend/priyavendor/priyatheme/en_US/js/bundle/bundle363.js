require.config({"config": {
        "jsbuild":{"Magento_Checkout/js/action/select-shipping-address.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/**\n * @api\n */\ndefine([\n    'Magento_Checkout/js/model/quote'\n], function (quote) {\n    'use strict';\n\n    return function (shippingAddress) {\n        quote.shippingAddress(shippingAddress);\n    };\n});\n"}
}});
