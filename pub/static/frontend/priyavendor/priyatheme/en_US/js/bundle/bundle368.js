require.config({"config": {
        "jsbuild":{"Magento_Checkout/js/action/set-shipping-information.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/**\n * @api\n */\ndefine([\n    '../model/quote',\n    'Magento_Checkout/js/model/shipping-save-processor'\n], function (quote, shippingSaveProcessor) {\n    'use strict';\n\n    return function () {\n        return shippingSaveProcessor.saveShippingInformation(quote.shippingAddress().getType());\n    };\n});\n"}
}});
