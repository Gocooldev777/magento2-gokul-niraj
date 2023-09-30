require.config({"config": {
        "jsbuild":{"Magento_Checkout/js/action/set-payment-information.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/**\n * @api\n */\ndefine([\n    'Magento_Checkout/js/action/set-payment-information-extended'\n\n], function (setPaymentInformationExtended) {\n    'use strict';\n\n    return function (messageContainer, paymentData) {\n\n        return setPaymentInformationExtended(messageContainer, paymentData, false);\n    };\n});\n"}
}});
