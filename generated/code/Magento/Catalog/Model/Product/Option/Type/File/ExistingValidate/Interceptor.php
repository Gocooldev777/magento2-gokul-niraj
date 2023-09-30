<?php
namespace Magento\Catalog\Model\Product\Option\Type\File\ExistingValidate;

/**
 * Interceptor class for @see \Magento\Catalog\Model\Product\Option\Type\File\ExistingValidate
 */
class Interceptor extends \Magento\Catalog\Model\Product\Option\Type\File\ExistingValidate implements \Magento\Framework\Interception\InterceptorInterface
{
    use \Magento\Framework\Interception\Interceptor;

    public function __construct()
    {
        $this->___init();
    }

    /**
     * {@inheritdoc}
     */
    public function isValid($value, ?string $originalName = null)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'isValid');
        return $pluginInfo ? $this->___callPlugins('isValid', func_get_args(), $pluginInfo) : parent::isValid($value, $originalName);
    }
}
