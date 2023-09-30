require.config({"config": {
        "jsbuild":{"Magento_Catalog/js/view/image.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'uiComponent'\n], function (Component) {\n    'use strict';\n\n    return Component.extend({\n        /** @inheritdoc */\n        initialize: function () {\n            this._super();\n\n            this.template = window.checkout.imageTemplate || this.template;\n        }\n    });\n});\n"}
}});
