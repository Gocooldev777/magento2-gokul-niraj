require.config({"config": {
        "jsbuild":{"Magento_CatalogSearch/js/search-terms-log.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\ndefine([\n    'jquery',\n    'mageUtils'\n], function ($, utils) {\n    'use strict';\n\n    return function (data) {\n        $.ajax({\n            method: 'GET',\n            url: data.url,\n            data: {\n                'q': utils.getUrlParameters(window.location.href).q\n            }\n        });\n    };\n});\n"}
}});
