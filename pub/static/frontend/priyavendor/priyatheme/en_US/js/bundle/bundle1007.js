require.config({"config": {
        "text":{"Magento_Checkout/template/cart/totals.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<div class=\"table-wrapper\" data-bind=\"blockLoader: isLoading\">\n    <table class=\"data table totals\">\n        <caption class=\"table-caption\" data-bind=\"text: $t('Total')\"></caption>\n        <tbody>\n        <!-- ko foreach: elems() -->\n            <!-- ko template: getTemplate() --><!-- /ko -->\n        <!-- /ko -->\n        </tbody>\n    </table>\n</div>\n"}
}});
