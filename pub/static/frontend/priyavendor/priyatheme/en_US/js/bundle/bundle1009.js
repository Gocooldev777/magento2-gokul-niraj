require.config({"config": {
        "text":{"Magento_Checkout/template/cart/totals/shipping.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<!-- ko if: isCalculated() -->\n<tr class=\"totals shipping excl\">\n    <th class=\"mark\" colspan=\"1\" scope=\"row\" data-bind=\"text: title + ' (' + getShippingMethodTitle() + ')'\"></th>\n    <td class=\"amount\">\n        <span class=\"price\" data-bind=\"text: getValue()\"></span>\n    </td>\n</tr>\n<!-- /ko -->\n"}
}});
