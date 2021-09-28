<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
    <div>
        <div class="components-show">
            <um-card title="单选框组件">
                <div class="components-group">
                    <p>默认按钮</p>
                    <um-radio v-model="testdata.first.radio_1" label="111">foo</um-radio>
                    <um-radio v-model="testdata.first.radio_1" label="222">bar</um-radio>
                </div>
                <div class="components-group">
                    <p>按钮组</p>
                    <um-radio-group v-model="testdata.first.radio_2">
                        <um-radio label="111">foo</um-radio>
                        <um-radio label="222">bar</um-radio>
                        <um-radio label="333" disabled>baz</um-radio>
                    </um-radio-group>
                </div>
                <div class="components-group">
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
                <h2>um-radio</h2>
                <um-table
                :columns="attribution.columns"
                :data="attribution.data"
                >
                </um-table>

                <h2>um-radio-group</h2>
                <um-table
                :columns="attributionGroup.columns"
                :data="attributionGroup.data"
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
    <um-button>Common</um-button>
    <um-button type="green" notion>Primary</um-button>
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
    <um-button type="green" :size="30">SIZE=30</um-button>
    <um-button :size="30" notion>SIZE=30</um-button>
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
                    },
                    {
                        attr: 'disabled',
                        type: 'Boolean',
                        default: 'false',
                        description: '是否禁用'
                    }
                ]
            },
            attributionGroup: {
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
                        attr: 'v-model',
                        type: 'Any',
                        default: '-',
                        description: 
                            '选中的um-radio中的label值会与v-model绑定'
                    }
                ]
            },
            testdata: {
                first: {
                    radio_1: true,
                    radio_2: false,
                }
            },
            
        }
    }
}
</script>

<style lang="scss">
.um-button {
    margin: 5px;
}
</style>