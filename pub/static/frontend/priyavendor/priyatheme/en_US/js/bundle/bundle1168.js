require.config({"config": {
        "text":{"Magento_Ui/templates/grid/cells/link.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<div class=\"data-grid-cell-content\"\n     if=\"!$col.isLink($row())\"\n     text=\"$col.getLabel($row())\"></div>\n<a   class=\"action-menu-item\"\n     if=\"$col.isLink($row())\"\n     text=\"$col.getLabel($row())\"\n     attr=\"href: $col.getLink($row())\"></a>\n"}
}});
