require.config({"config": {
        "jsbuild":{"PayPal_Braintree/js/model/step-navigator-mixin.js":"define([\n    'mage/utils/wrapper',\n    'jquery'\n], function (wrapper, $) {\n    'use strict';\n\n    let mixin = {\n        handleHash: function (originalFn) {\n            var hashString = window.location.hash.replace('#', '');\n            if (hashString.indexOf('venmo') > -1) {\n                return false;\n            }\n\n            return originalFn();\n        }\n    };\n\n    return function (target) {\n        return wrapper.extend(target, mixin);\n    };\n});\n"}
}});
