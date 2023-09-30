require.config({"config": {
        "text":{"Magento_Ui/templates/content/content.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n\n<div html=\"getContentUnsanitizedHtml()\"\n     css=\"$data.additionalClasses\"\n     visible=\"visible\"></div>\n\n<div data-role=\"spinner\"\n     class=\"admin__data-grid-loading-mask\"\n     visible=\"loading\"\n     if=\"showSpinner\">\n    <div class=\"spinner\">\n        <span repeat=\"8\"></span>\n    </div>\n</div>\n"}
}});
