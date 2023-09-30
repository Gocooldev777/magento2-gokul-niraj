require.config({"config": {
        "jsbuild":{"Magento_Checkout/js/action/select-payment-method.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/**\n * @api\n */\ndefine([\n    'Magento_Checkout/js/model/quote'\n], function (quote) {\n    'use strict';\n\n    return function (paymentMethod) {\n        if (paymentMethod) {\n            paymentMethod.__disableTmpl = {\n                title: true\n            };\n        }\n        quote.paymentMethod(paymentMethod);\n    };\n});\n"}
}});
