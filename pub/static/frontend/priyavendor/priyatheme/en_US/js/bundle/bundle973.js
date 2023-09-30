require.config({"config": {
        "text":{"Magento_Catalog/template/product/addtocompare-button.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<if args=\"isAllowed()\">\n    <button attr=\"'data-post': $col.getDataPost($row()), title: getLabel()\"\n            class=\"action tocompare\"\n            data-action=\"add-to-compare\">\n            <span text=\"getLabel()\"></span>\n    </button>\n</if>\n"}
}});
