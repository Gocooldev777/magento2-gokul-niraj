require.config({"config": {
        "text":{"Magento_Ui/templates/grid/sortBy.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<div if=\"isVisible\" class=\"masonry-image-sortby\">\n    <b><!-- ko i18n: 'Sort by' --><!-- /ko -->:</b>\n    <select class=\"admin__control-select\" data-bind=\"\n        options: options,\n        optionsValue: 'value',\n        optionsText: 'label',\n        value: selectedOption\n    \"></select>\n</div>\n"}
}});
