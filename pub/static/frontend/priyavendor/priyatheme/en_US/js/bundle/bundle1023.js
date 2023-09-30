require.config({"config": {
        "text":{"Magento_Checkout/template/shipping-address/list.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n\n<!-- ko if: (visible)-->\n<div class=\"field addresses\">\n    <div class=\"control\">\n        <div class=\"shipping-address-items\">\n            <!-- ko foreach: { data: elems, as: 'element' } -->\n            <!-- ko template: element.getTemplate() --><!-- /ko -->\n            <!-- /ko -->\n        </div>\n    </div>\n</div>\n<!-- /ko -->\n"}
}});
