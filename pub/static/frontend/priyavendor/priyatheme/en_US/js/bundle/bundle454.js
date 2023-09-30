require.config({"config": {
        "jsbuild":{"Magento_CheckoutAgreements/js/view/agreement-validation.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'uiComponent',\n    'Magento_Checkout/js/model/payment/additional-validators',\n    'Magento_CheckoutAgreements/js/model/agreement-validator'\n], function (Component, additionalValidators, agreementValidator) {\n    'use strict';\n\n    additionalValidators.registerValidator(agreementValidator);\n\n    return Component.extend({});\n});\n"}
}});
