require.config({"config": {
        "jsbuild":{"Magento_Checkout/js/view/authentication-messages.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'Magento_Ui/js/view/messages',\n    'Magento_Checkout/js/model/authentication-messages'\n], function (Component, messageContainer) {\n    'use strict';\n\n    return Component.extend({\n        /** @inheritdoc */\n        initialize: function (config) {\n            return this._super(config, messageContainer);\n        }\n    });\n});\n"}
}});
