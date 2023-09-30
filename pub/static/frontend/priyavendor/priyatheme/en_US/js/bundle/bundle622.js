require.config({"config": {
        "jsbuild":{"Magento_ReCaptchaFrontendUi/js/registry.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine(['ko'], function (ko) {\n    'use strict';\n\n    return {\n        ids: ko.observableArray([]),\n        captchaList: ko.observableArray([]),\n        tokenFields: ko.observableArray([])\n    };\n});\n"}
}});
