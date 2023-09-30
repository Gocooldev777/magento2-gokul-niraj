require.config({"config": {
        "text":{"Magento_Checkout/template/progress-bar.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<ul class=\"opc-progress-bar\">\n    <!-- ko foreach: { data: steps().sort(sortItems), as: 'item' } -->\n        <li class=\"opc-progress-bar-item\" data-bind=\"css: item.isVisible() ? '_active' : ($parent.isProcessed(item) ? '_complete' : '')\">\n            <span data-bind=\"i18n: item.title, click: $parent.navigateTo\"></span>\n        </li>\n    <!-- /ko -->\n</ul>\n"}
}});
