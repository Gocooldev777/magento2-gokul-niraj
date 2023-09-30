require.config({"config": {
        "jsbuild":{"Magento_SalesRule/js/view/payment/discount-messages.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'Magento_Ui/js/view/messages',\n    '../../model/payment/discount-messages'\n], function (Component, messageContainer) {\n    'use strict';\n\n    return Component.extend({\n        /** @inheritdoc */\n        initialize: function (config) {\n            return this._super(config, messageContainer);\n        }\n    });\n});\n"}
}});
