require.config({"config": {
        "jsbuild":{"Magento_Shipping/js/model/config.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([], function () {\n    'use strict';\n\n    return function () {\n        return window.checkoutConfig.shippingPolicy;\n    };\n});\n"}
}});
