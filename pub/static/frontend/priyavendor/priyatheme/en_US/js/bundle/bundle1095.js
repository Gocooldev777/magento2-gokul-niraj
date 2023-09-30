require.config({"config": {
        "text":{"Magento_Tax/template/price/adjustment.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<if args=\"displayBothPrices()\">\n    <span class=\"price-wrapper price-excluding-tax\"\n          attr=\"'data-label': $t('Excl. Tax')\"\n          data-price-amount=\"\"\n          data-price-type=\"basePrice\"\n          html=\"getTax($row())\">\n    </span>\n</if>\n"}
}});
