require.config({"config": {
        "text":{"Magento_Catalog/template/product/name.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<strong if=\"isAllowed()\"\n        class=\"product-item-name\">\n    <a attr=\"href: $row().url\" html=\"getNameUnsanitizedHtml($col.getLabel($row()))\"></a>\n</strong>\n"}
}});
