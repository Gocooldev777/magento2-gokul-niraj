require.config({"config": {
        "text":{"Magento_Catalog/template/product/image_with_borders.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<span class=\"product-image-container\" data-bind=\"style: {width: width/2 + 'px'}\">\n    <span class=\"product-image-wrapper\"  data-bind=\"style: {'padding-bottom': height/width*100 + '%'}\">\n        <img class=\"product-image-photo\" data-bind=\"attr: {src: src, alt: alt}, style: {width: 'auto', height: 'auto'}\" />\n    </span>\n</span>\n"}
}});
