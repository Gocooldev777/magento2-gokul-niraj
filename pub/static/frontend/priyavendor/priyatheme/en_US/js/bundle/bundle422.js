require.config({"config": {
        "jsbuild":{"Magento_Checkout/js/view/summary.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'uiComponent',\n    'Magento_Checkout/js/model/totals'\n], function (Component, totals) {\n    'use strict';\n\n    return Component.extend({\n        isLoading: totals.isLoading\n    });\n});\n"}
}});
