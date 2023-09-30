require.config({"config": {
        "jsbuild":{"Magento_ReCaptchaStorePickup/js/reCaptchaStorePickup.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine(['Magento_ReCaptchaFrontendUi/js/reCaptcha'], function (reCaptcha) {\n    'use strict';\n\n    return reCaptcha.extend({\n\n        /**\n         * @inheritdoc\n         */\n        renderReCaptcha: function () {\n            this.captchaInitialized = false;\n            this._super();\n        }\n    });\n});\n"}
}});
