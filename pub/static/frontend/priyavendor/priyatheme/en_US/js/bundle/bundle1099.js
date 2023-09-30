require.config({"config": {
        "text":{"Magento_Ui/templates/area.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<if args=\"wasActivated\">\n    <div each=\"elems\" visible=\"active\" attr=\"'data-area-active': active\" render=\"\"></div>\n</if>\n"}
}});
