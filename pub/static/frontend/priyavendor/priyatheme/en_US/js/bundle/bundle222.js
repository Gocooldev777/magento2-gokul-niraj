require.config({"config": {
        "jsbuild":{"mage/ie-class-fixer.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([], function () {\n    'use strict';\n\n    if (navigator.userAgent.match(/Trident.*rv[ :]*11\\./)) {\n        document.documentElement.classList.add('ie11');\n    }\n});\n"}
}});
