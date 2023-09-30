require.config({"config": {
        "jsbuild":{"PayPal_Braintree/js/view/payment/lpm.js":"define(\n    [\n        'uiComponent',\n        'Magento_Checkout/js/model/payment/renderer-list'\n    ],\n    function (\n        Component,\n        rendererList\n    ) {\n        'use strict';\n\n        rendererList.push(\n            {\n                type: 'braintree_local_payment',\n                component: 'PayPal_Braintree/js/view/payment/method-renderer/lpm'\n            }\n        );\n\n        return Component.extend({});\n    }\n);\n"}
}});
