require.config({"config": {
        "text":{"Magento_Checkout/template/summary/totals.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<!-- ko if: isDisplayed() -->\n<table class=\"data table table-totals\">\n    <caption class=\"table-caption\" data-bind=\"i18n: 'Order Summary'\"></caption>\n    <tbody>\n    <!-- ko foreach: elems() -->\n        <!-- ko template: getTemplate() --><!-- /ko -->\n    <!-- /ko -->\n    </tbody>\n</table>\n<!-- /ko -->\n"}
}});
