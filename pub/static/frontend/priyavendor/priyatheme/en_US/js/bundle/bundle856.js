require.config({"config": {
        "jsbuild":{"Magento_Weee/js/view/cart/totals/weee.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'Magento_Weee/js/view/checkout/summary/weee'\n], function (Component) {\n    'use strict';\n\n    return Component.extend({\n\n        /**\n         * @override\n         */\n        isFullMode: function () {\n            return true;\n        }\n    });\n});\n"}
}});
