require.config({"config": {
        "text":{"Magento_Ui/templates/form/element/html.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<!-- ko with: {valueUnsanitizedHtml: value, inputName: inputName, uid: uid} -->\n<span class=\"admin__field-value\"\n       data-bind=\"\n        html: valueUnsanitizedHtml,\n        attr: {\n            name: inputName,\n            id: uid\n    }\"></span>\n<!-- /ko -->\n"}
}});
