require.config({"config": {
        "text":{"Magento_Ui/templates/list/listing.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n\n<ol class=\"list-items\">\n    <li class=\"list-item\" repeat=\"foreach: rows, item: '$row'\">\n        <div class=\"item-info\">\n            <!--ko foreach: {data: getVisible(), as: '$col'}-->\n                <!-- ko template: getBody() --><!-- /ko -->\n            <!-- /ko -->\n        </div>\n    </li>\n</ol>\n"}
}});
