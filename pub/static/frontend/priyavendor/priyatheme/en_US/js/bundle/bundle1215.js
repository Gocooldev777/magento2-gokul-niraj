require.config({"config": {
        "text":{"Magento_Weee/template/checkout/summary/weee.html":"<!--\n/**\n* Copyright \u00a9 Magento, Inc. All rights reserved.\n* See COPYING.txt for license details.\n*/\n-->\n<!-- ko if: isDisplayed() -->\n<tr class=\"totals\">\n    <th data-bind=\"text: title\" class=\"mark\" scope=\"row\"></th>\n    <td class=\"amount\" data-bind=\"attr: {'data-th': title}\">\n        <span class=\"price\" data-bind=\"text: getValue()\"></span>\n    </td>\n</tr>\n<!-- /ko -->\n"}
}});
