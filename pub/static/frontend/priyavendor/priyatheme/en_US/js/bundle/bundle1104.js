require.config({"config": {
        "text":{"Magento_Ui/templates/dynamic-rows/cells/action-delete.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<button class=\"action-delete\"\n        attr=\"{'data-action': 'remove_row'}\"\n        data-bind=\"\n            click: $data.deleteRecord.bind($data, $record().index, $record().recordId),\n            attr: {\n                title: $parent.deleteButtonLabel\n            }\n        \">\n    <span translate=\"$parent.deleteButtonLabel\"></span>\n</button>\n"}
}});
