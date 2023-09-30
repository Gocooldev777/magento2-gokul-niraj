require.config({"config": {
        "jsbuild":{"Magento_Checkout/js/view/sidebar.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'uiComponent',\n    'ko',\n    'jquery',\n    'Magento_Checkout/js/model/sidebar'\n], function (Component, ko, $, sidebarModel) {\n    'use strict';\n\n    return Component.extend({\n        /**\n         * @param {HTMLElement} element\n         */\n        setModalElement: function (element) {\n            sidebarModel.setPopup($(element));\n        }\n    });\n});\n"}
}});
