require.config({"config": {
        "jsbuild":{"Magento_Paypal/js/view/payment/method-renderer/paypal-express.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'Magento_Paypal/js/view/payment/method-renderer/paypal-express-abstract'\n], function (Component) {\n    'use strict';\n\n    return Component.extend({\n        defaults: {\n            template: 'Magento_Paypal/payment/paypal-express'\n        }\n    });\n});\n"}
}});
