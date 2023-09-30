require.config({"config": {
        "text":{"Magento_Variable/template/grid/cells/radioselect.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n\n<input type=\"radio\" class=\"admin__control-radio\" name=\"radio-select\" data-bind=\"value: $row()['variable_type'] + ':' + $row()['code'], checked: selectedVariableCode, click: selectVariable\"/>\n<label class=\"admin__field-label\"></label>\n"}
}});
