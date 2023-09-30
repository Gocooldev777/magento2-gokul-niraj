require.config({"config": {
        "jsbuild":{"Magento_Wishlist/js/view/wishlist.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'uiComponent',\n    'Magento_Customer/js/customer-data'\n], function (Component, customerData) {\n    'use strict';\n\n    return Component.extend({\n        /** @inheritdoc */\n        initialize: function () {\n            this._super();\n\n            this.wishlist = customerData.get('wishlist');\n        }\n    });\n});\n"}
}});
