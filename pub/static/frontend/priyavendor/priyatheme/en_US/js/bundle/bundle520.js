require.config({"config": {
        "jsbuild":{"Magento_LoginAsCustomerFrontendUi/js/login.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'jquery',\n    'Magento_Customer/js/customer-data',\n    'Magento_Customer/js/section-config'\n], function ($, customerData, sectionConfig) {\n\n    'use strict';\n\n    return function (config) {\n        customerData.reload(sectionConfig.getSectionNames()).done(function () {\n            window.location.href = config.redirectUrl;\n        });\n    };\n});\n"}
}});
