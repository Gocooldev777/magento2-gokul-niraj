require.config({"config": {
        "text":{"Magento_Ui/templates/form/element/password.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<input class=\"input-text\" type=\"password\" data-bind=\"\n    hasFocus: focused,\n    value: value,\n    attr: {\n        name: inputName,\n        placeholder: placeholder,\n        'aria-describedby': getDescriptionId(),\n        'aria-required': required,\n        'aria-invalid': error() ? true : 'false',\n        id: uid,\n        disabled: disabled\n    }\"/>\n"}
}});
