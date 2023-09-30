require.config({"config": {
        "jsbuild":{"Magento_Checkout/js/model/shipping-save-processor/payload-extender.js":"define([], function () {\n    'use strict';\n\n    return function (payload) {\n        payload.addressInformation['extension_attributes'] = {};\n\n        return payload;\n    };\n});\n"}
}});
