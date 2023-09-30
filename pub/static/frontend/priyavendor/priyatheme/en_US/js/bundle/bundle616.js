require.config({"config": {
        "jsbuild":{"Magento_ReCaptchaCheckout/js/webapiReCaptchaRegistry-mixin.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([], function () {\n    'use strict';\n\n    return function (originalFunction) {\n        /**\n         * {@inheritDoc}\n         */\n       originalFunction.addListener = function (id , func) {\n            this._listeners[id] = func;\n       };\n\n        return originalFunction;\n    };\n\n});\n"}
}});
