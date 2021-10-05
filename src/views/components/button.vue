<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
    <div>
        <div class="components-show">
            <um-card title="按钮组件">
                <div class="components-group">
                    <p>默认按钮</p>
                    <um-button>bar</um-button>
                    <um-button type="green" notion>foo</um-button>
                </div>
                <div class="components-group">
                    <p>圆形按钮组件</p>
                    <um-button circle notion>
                        <i class="um-icon-stop"></i>
                    </um-button>
                    <um-button circleBox >
                        <i class="um-icon-stop"></i>
                    </um-button>
                </div>
                <div class="components-group">
                    <p>其他尺寸</p>
                    <um-button type="green" :size="30">bar, size 30</um-button>
                    <um-button :size="30" notion>foo, size 30</um-button>
                </div>
                <template slot="moreinfo">
                    <div class="components_code">
                        <pre v-highlightjs="sourcecode">
                            <code class="xml"></code>
                        </pre>
                    </div>
                </template>
            </um-card>
        </div>
        <div class="components-use">
            <div>
                <um-table
                :columns="attribution.columns"
                :data="attribution.data"
                >
                </um-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sourcecode: `<div class="components-group">
    <p>默认按钮</p>
    <um-button>bar</um-button>
    <um-button type="green" notion>foo</um-button>
</div>
<div class="components-group">
    <p>圆形按钮组件</p>
    <um-button circle notion>
        <i class="um-icon-stop"></i>
    </um-button>
    <um-button circleBox >
        <i class="um-icon-stop"></i>
    </um-button>
</div>
<div class="components-group">
    <p>其他尺寸</p>
    <um-button type="green" :size="30">bar_size_30</um-button>
    <um-button :size="30" notion>foo_size_30</um-button>
</div>`,
            sourcecodeJS:``,
            attribution: {
                columns: [
                    {
                        name: 'attr',
                        label: '属性名称',
                        width: '12%'
                    },
                    {
                        name: 'type',
                        label: '接受类型',
                        width: '12%'
                    },
                    {
                        name: 'default',
                        label: '默认值',
                        width: '12%'
                    },
                    {
                        name: 'description',
                        label: '其他说明',
                        width: '64%'
                    }
                ],
                data: [
                    {
                        attr: 'type',
                        type: 'String',
                        default: 'white',
                        description: '按钮外观主要颜色, 可选white/green'
                    },
                    {
                        attr: 'circle',
                        type: 'Boolean',
                        default: 'false',
                        description: '按钮外观是否为圆形'
                    },
                    {
                        attr: 'circleBox',
                        type: 'Boolean',
                        default: 'false',
                        description: '按钮外观是否为方形'
                    },
                    {
                        attr: 'size',
                        type: 'Number',
                        default: '20',
                        description: '按钮的大小属性, 单位为px'
                    }
                ]
            }
            
        }
    }
}
</script>

<style lang="scss">
.um-button {
    margin: 5px;
}
</style>