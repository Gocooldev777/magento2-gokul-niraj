require.config({"config": {
        "text":{"Magento_Ui/templates/grid/columns/image.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<div class=\"masonry-image-block\" ko-style=\"$col.getStyles($row())\" css=\"{'active': $col.getIsActive($row())}\" attr=\"'data-id': $col.getId($row())\">\n    <img data-bind=\"event: { load: updateStyles($row()) }\" attr=\"src: $col.getUrl($row())\" css=\"$col.getClasses($row())\" click=\"function(){ expandPreview($row()) }\" data-role=\"thumbnail\"/>\n</div>\n"}
}});
