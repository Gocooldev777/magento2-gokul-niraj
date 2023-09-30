require.config({"config": {
        "jsbuild":{"Magento_LoginAsCustomerAssistance/js/opt-in.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'jquery'\n], function ($) {\n    'use strict';\n\n    return function (config, element) {\n        $(element).on('submit', function () {\n            this.elements['assistance_allowed'].value =\n                this.elements['assistance_allowed_checkbox'].checked ?\n                    config.allowAccess : config.denyAccess;\n        });\n    };\n});\n"}
}});
