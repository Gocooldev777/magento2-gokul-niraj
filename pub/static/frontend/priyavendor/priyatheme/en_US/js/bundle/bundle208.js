require.config({"config": {
        "jsbuild":{"mage/bootstrap.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'jquery',\n    'mage/apply/main',\n    'Magento_Ui/js/lib/knockout/bootstrap'\n], function ($, mage) {\n    'use strict';\n\n    $.ajaxSetup({\n        cache: false\n    });\n\n    /**\n     * Init all components defined via data-mage-init attribute.\n     * Execute in a separate task to prevent main thread blocking.\n     */\n    setTimeout(mage.apply);\n});\n"}
}});
