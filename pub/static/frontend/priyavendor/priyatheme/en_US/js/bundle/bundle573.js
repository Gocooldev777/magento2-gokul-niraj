require.config({"config": {
        "jsbuild":{"Magento_Payment/js/model/credit-card-validation/credit-card-number-validator/luhn10-validator.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([], function () {\n    'use strict';\n\n    /**\n     * Luhn algorithm verification\n     */\n    return function (a, b, c, d, e) {\n        for (d = +a[b = a.length - 1], e = 0; b--;) {\n            c = +a[b];\n            d += ++e % 2 ? 2 * c % 10 + (c > 4) : c;\n        }\n\n        return !(d % 10);\n    };\n});\n"}
}});
