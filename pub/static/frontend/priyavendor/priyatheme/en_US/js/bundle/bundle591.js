require.config({"config": {
        "jsbuild":{"Magento_Paypal/js/model/iframe.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine(['ko'], function (ko) {\n    'use strict';\n\n    var isInAction = ko.observable(false);\n\n    return {\n        isInAction: isInAction,\n\n        /**\n         * @param {jQuery.Event} event\n         */\n        stopEventPropagation: function (event) {\n            event.stopImmediatePropagation();\n            event.preventDefault();\n        }\n    };\n});\n"}
}});
