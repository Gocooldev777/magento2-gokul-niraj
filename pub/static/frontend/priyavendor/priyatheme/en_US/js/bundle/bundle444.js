require.config({"config": {
        "jsbuild":{"Magento_Checkout/js/view/summary/totals.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'Magento_Checkout/js/view/summary/abstract-total'\n], function (Component) {\n    'use strict';\n\n    return Component.extend({\n        /**\n         * @return {*}\n         */\n        isDisplayed: function () {\n            return this.isFullMode();\n        }\n    });\n});\n"}
}});
