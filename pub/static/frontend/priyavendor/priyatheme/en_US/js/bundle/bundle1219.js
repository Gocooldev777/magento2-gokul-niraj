require.config({"config": {
        "text":{"Magento_Wishlist/template/product/addtowishlist-button.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<button if=\"isAllowed()\"\n        attr=\"'data-post': getDataPost($row()),\n               title: getLabel()\"\n        class=\"action towishlist\"\n        data-action=\"add-to-wishlist\">\n        <span translate=\"getLabel()\"></span>\n</button>\n"}
}});
