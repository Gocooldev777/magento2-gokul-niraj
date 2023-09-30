require.config({"config": {
        "jsbuild":{"Magento_GiftMessage/js/model/url-builder.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'jquery',\n    'Magento_Checkout/js/model/url-builder'\n], function ($, urlBuilder) {\n    'use strict';\n\n    return $.extend(urlBuilder, {\n        storeCode: window.giftOptionsConfig.storeCode\n    });\n});\n"}
}});
