require.config({"config": {
        "jsbuild":{"Magento_PaypalCaptcha/js/model/skipRefreshCaptcha.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine(['ko'], function (ko) {\n    'use strict';\n\n    return {\n        skip: ko.observable(false)\n    };\n});\n"}
}});
