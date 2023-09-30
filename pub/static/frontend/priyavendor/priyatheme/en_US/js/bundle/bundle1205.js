require.config({"config": {
        "text":{"Magento_Ui/templates/modal/modal-component.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<div css=\"modalClass\" hasFocus=\"focused\">\n    <each if=\"state() || $data.modal\" args=\"data: elems, as: 'element'\" render=\"\"></each>\n</div>\n"}
}});
