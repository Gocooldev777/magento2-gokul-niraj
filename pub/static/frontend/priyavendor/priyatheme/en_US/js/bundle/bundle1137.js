require.config({"config": {
        "text":{"Magento_Ui/templates/form/element/price.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<div class=\"admin__control-addon\">\n    <label class=\"admin__addon-prefix\" data-bind=\"attr: { for: uid }\"><span data-bind=\"text: currency_sign\"></span></label>\n    <input class=\"admin__control-text\" type=\"text\" data-bind=\"value: value, attr: { id: uid, disabled: disabled, name: inputName }, hasFocus: focused\"/>\n</div>\n"}
}});
