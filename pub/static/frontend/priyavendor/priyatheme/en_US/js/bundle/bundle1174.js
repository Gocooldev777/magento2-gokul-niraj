require.config({"config": {
        "text":{"Magento_Ui/templates/grid/cells/expandable/content.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<div class=\"admin__tooltip-title\" if=\"$data.tooltipTitle.length\">\n    <span translate=\"$data.tooltipTitle\"></span>\n</div>\n<ul class=\"items\">\n    <li class=\"item\" repeat=\"foreach: $col.getLabelsArray($row()), item: '$item'\">\n        <span text=\"$item()\"></span>\n    </li>\n</ul>\n"}
}});
