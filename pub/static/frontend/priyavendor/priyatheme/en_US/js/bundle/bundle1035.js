require.config({"config": {
        "text":{"Magento_Checkout/template/summary/item/details/message.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<div class=\"cart item message notice\" if=\"getMessage($parents[1])\">\n    <div data-bind=\"text: getMessage($parents[1])\"></div>\n</div>\n"}
}});
