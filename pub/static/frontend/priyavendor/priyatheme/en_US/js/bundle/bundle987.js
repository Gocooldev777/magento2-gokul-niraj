require.config({"config": {
        "text":{"Magento_Catalog/template/product/price/price_box.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<div class=\"price-box\"\n     if=\"isAllowed()\">\n    <each args=\"data: getPrices($row()), as: '$price'\">\n        <with args=\"$price\">\n            <render args=\"getBody()\"></render>\n        </with>\n    </each>\n</div>\n"}
}});
