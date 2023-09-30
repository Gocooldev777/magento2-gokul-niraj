require.config({"config": {
        "text":{"Magento_Checkout/template/summary/subtotal.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n\n<tr class=\"totals\">\n    <th class=\"mark\" scope=\"row\" data-bind=\"text: title\"></th>\n    <td class=\"amount\">\n        <span class=\"price\" data-bind =\"text: getValue(), attr:{'data-label': title}\"></span>\n        <!-- ko foreach: elems() -->\n            <!-- ko template: getTemplate() --><!-- /ko -->\n        <!-- /ko -->\n    </td>\n</tr>\n"}
}});
