require.config({"config": {
        "jsbuild":{"Magento_Ui/js/grid/controls/button/split.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'jquery'\n], function ($) {\n    'use strict';\n\n    return function (data, element) {\n\n        $(element).on('click.splitDefault', '.action-default', function () {\n            $(this).siblings('.dropdown-menu').find('.item-default').trigger('click');\n        });\n    };\n});\n"}
}});
