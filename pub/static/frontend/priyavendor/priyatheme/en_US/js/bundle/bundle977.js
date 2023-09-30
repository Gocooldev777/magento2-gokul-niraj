require.config({"config": {
        "text":{"Magento_Catalog/template/product/link.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<a if=\"isAllowed()\"\n   class=\"product-item-link\"\n   attr=\"href: $row().url\"\n   text=\"label\"></a>\n"}
}});
