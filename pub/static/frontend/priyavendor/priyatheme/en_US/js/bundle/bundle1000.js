require.config({"config": {
        "text":{"Magento_Checkout/template/summary.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<div class=\"opc-block-summary\" data-bind=\"blockLoader: isLoading\">\n    <span data-bind=\"i18n: 'Order Summary'\" class=\"title\"></span>\n    <!-- ko foreach: elems() -->\n        <!-- ko template: getTemplate() --><!-- /ko -->\n    <!-- /ko -->\n</div>\n"}
}});
