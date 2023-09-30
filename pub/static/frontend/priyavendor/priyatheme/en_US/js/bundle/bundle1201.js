require.config({"config": {
        "text":{"Magento_Ui/templates/grid/sticky/listing.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<div class=\"admin__data-grid-wrap\" data-role=\"sticky-el-root\">\n    <table class=\"data-grid\">\n        <thead>\n            <tr each=\"data: getVisible(), as: '$col'\" render=\"getHeader()\"></tr>\n        </thead>\n        <tbody></tbody>\n    </table>\n</div>\n"}
}});
