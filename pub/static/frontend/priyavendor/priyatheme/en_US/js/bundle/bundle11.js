require.config({"config": {
        "jsbuild":{"extjs/defaults.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/* global Ext*/\ndefine(['extjs/ext-tree'], function () {\n    'use strict';\n\n    Ext.UpdateManager.defaults.loadScripts = false;\n    Ext.UpdateManager.defaults.disableCaching = true;\n    Ext.BLANK_IMAGE_URL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';\n});\n"}
}});
