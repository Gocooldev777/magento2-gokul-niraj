require.config({"config": {
        "jsbuild":{"Magento_Customer/js/model/address-list.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/**\n * @api\n */\ndefine([\n    'ko',\n    './customer-addresses'\n], function (ko, defaultProvider) {\n    'use strict';\n\n    return ko.observableArray(defaultProvider.getAddressItems());\n});\n"}
}});
