require.config({"config": {
        "text":{"PayPal_Braintree/template/payment/paypal/vault.html":"<!--\n/**\n * Copyright \u00a9 2013-2017 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<div class=\"payment-method\" css=\"'_active': (getId() === isChecked())\" id=\"payment-method-braintree-paypal-vault\">\n    <div class=\"payment-method-title field choice\">\n        <input type=\"radio\"\n               name=\"payment[method]\"\n               class=\"radio\"\n               data-bind=\"\n                    attr: {'id': getId()},\n                    value: getId(),\n                    click: selectPaymentMethod,\n                    checked: isChecked,\n                    visible: isRadioButtonVisible()\"/>\n        <label class=\"label\" data-bind=\"attr: {'for': getId()}\">\n            <img data-bind=\"attr: {\n                'src': getPaymentIcon().url,\n                'width': getPaymentIcon().width,\n                'height': getPaymentIcon().height\n            }\" class=\"payment-icon\">\n            <span text=\"getPayerEmail()\"></span>\n        </label>\n    </div>\n\n    <div class=\"payment-method-content\">\n        <each args=\"getRegion('messages')\" render=\"\"></each>\n        <div class=\"checkout-agreements-block\">\n            <!-- ko foreach: $parent.getRegion('before-place-order') -->\n            <!-- ko template: getTemplate() --><!-- /ko -->\n            <!--/ko-->\n        </div>\n        <div class=\"actions-toolbar\">\n            <div class=\"primary\">\n                <button class=\"action primary checkout\"\n                        type=\"submit\"\n                        data-bind=\"\n                            click: beforePlaceOrder,\n                            attr: {title: $t('Place Order')}\">\n                    <span translate=\"'Place Order'\"></span>\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n"}
}});
require.config({
    bundles: {
        'mage/requirejs/static': [
            'jsbuild',
            'buildTools',
            'text',
            'statistician'
        ]
    },
    deps: [
        'jsbuild'
    ]
});
