require.config({"config": {
        "jsbuild":{"Magento_Paypal/js/action/set-payment-method.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'Magento_Checkout/js/model/quote',\n    'Magento_Checkout/js/action/set-payment-information'\n], function (quote, setPaymentInformation) {\n    'use strict';\n\n    return function (messageContainer) {\n        return setPaymentInformation(messageContainer, quote.paymentMethod());\n    };\n});\n"}
}});
