require.config({"config": {
        "jsbuild":{"Magento_Checkout/js/model/payment/method-converter.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'underscore'\n], function (_) {\n    'use strict';\n\n    return function (methods) {\n        _.each(methods, function (method) {\n            if (method.hasOwnProperty('code')) {\n                method.method = method.code;\n                delete method.code;\n            }\n        });\n\n        return methods;\n    };\n});\n"}
}});
