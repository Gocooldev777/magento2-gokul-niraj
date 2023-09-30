require.config({"config": {
        "text":{"Magento_Ui/templates/grid/columns/overlay.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<div if=\"$col.isVisible($row())\" class=\"masonry-image-overlay\">\n    <span text=\"$col.getLabel($row())\"></span>\n</div>\n"}
}});
