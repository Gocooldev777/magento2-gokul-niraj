require.config({"config": {
        "text":{"Magento_Checkout/template/minicart/subtotal.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<div class=\"subtotal\">\n    <span class=\"label\">\n        <!-- ko i18n: 'Cart Subtotal' --><!-- /ko -->\n    </span>\n\n    <!-- ko foreach: elems -->\n        <!-- ko template: getTemplate() --><!-- /ko -->\n    <!-- /ko -->\n</div>\n"}
}});
