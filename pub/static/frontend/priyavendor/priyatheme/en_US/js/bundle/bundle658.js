require.config({"config": {
        "jsbuild":{"Magento_Shipping/js/view/checkout/shipping/shipping-policy.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'uiComponent',\n    'Magento_Shipping/js/model/config'\n\n], function (Component, config) {\n    'use strict';\n\n    return Component.extend({\n        defaults: {\n            template: 'Magento_Shipping/checkout/shipping/shipping-policy'\n        },\n        config: config()\n    });\n});\n"}
}});
