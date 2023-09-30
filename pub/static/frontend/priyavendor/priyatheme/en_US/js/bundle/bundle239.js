require.config({"config": {
        "jsbuild":{"mage/tooltip.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/**\n * @deprecated since version 2.2.0\n */\ndefine([\n    'jquery',\n    'jquery-ui-modules/tooltip'\n], function ($) {\n    'use strict';\n\n    //Widget Wrapper\n    $.widget('mage.tooltip', $.ui.tooltip, {});\n\n    return $.mage.tooltip;\n});\n"}
}});
