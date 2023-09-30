require.config({"config": {
        "jsbuild":{"Magento_Ui/js/form/element/textarea.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/**\n * @api\n */\ndefine([\n    './abstract'\n], function (Abstract) {\n    'use strict';\n\n    return Abstract.extend({\n        defaults: {\n            cols: 15,\n            rows: 2,\n            elementTmpl: 'ui/form/element/textarea'\n        }\n    });\n});\n"}
}});
