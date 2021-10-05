<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
 * @Date: 2021-09-25 22:24:17
 * @LastEditTime: 2021-10-05 15:25:56
-->
<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
    <div>
        <div class="components-show">
            <um-card title="多选框组件">
                <div class="components-group">
                    <p>单独使用</p>
                    <um-checkbox v-model="testdata.first.box">默认</um-checkbox>
                    <um-checkbox v-model="testdata.first.box" disabled>禁用</um-checkbox>
                </div>
                <div class="components-group">
                    <p>成组使用</p>
                    <um-checkbox-group v-model="testdata.second.box">
                        <um-checkbox label="foo">foo</um-checkbox>
                        <um-checkbox label="bar">bar</um-checkbox>
                        <um-checkbox label="baz" disabled>baz</um-checkbox>
                    </um-checkbox-group>
                </div>
                <div class="components-group">
                    <p>自定义大小</p>
                    <um-checkbox-group v-model="testdata.second.box">
                        <um-checkbox :size="30" label="foo">foo</um-checkbox>
                        <um-checkbox :size="30" label="bar">bar</um-checkbox>
                        <um-checkbox :size="30" label="baz" disabled>baz</um-checkbox>
                    </um-checkbox-group>
                </div>
                <template slot="moreinfo">
                    <div class="components_code">
                        <pre v-highlightjs="sourcecode">
                            <code class="xml"></code>
                        </pre>
                        <pre v-highlightjs="sourcecodeJS">
                            <code class="javascript"></code>
                        </pre>
                    </div>
                </template>
            </um-card>
        </div>
        <div class="components-use">
            <div>
                <h2>um-checkbox</h2>
                <um-table
                :columns="attribution.columns"
                :data="attribution.data"
                >
                </um-table>

                <h2>um-checkbox-group</h2>
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
    <p>单独使用</p>
    <um-checkbox v-model="testdata.first.box">默认</um-checkbox>
    <um-checkbox v-model="testdata.first.box" disabled>禁用</um-checkbox>
</div>
<div class="components-group">
    <p>成组使用</p>
    <um-checkbox-group v-model="testdata.second.box">
        <um-checkbox label="foo">foo</um-checkbox>
        <um-checkbox label="bar">bar</um-checkbox>
        <um-checkbox label="baz" disabled>baz</um-checkbox>
    </um-checkbox-group>
</div>
<div class="components-group">
    <p>自定义大小</p>
    <um-checkbox-group v-model="testdata.second.box">
        <um-checkbox :size="30" label="foo">foo</um-checkbox>
        <um-checkbox :size="30" label="bar">bar</um-checkbox>
        <um-checkbox :size="30" label="baz" disabled>baz</um-checkbox>
    </um-checkbox-group>
</div>`,
            sourcecodeJS: `export default {
    data() {
        return {
            testdata: {
                first: {
                    box: false
                },
                second: {
                    box: []
                }
            },
        }
    }
}`,
            testdata: {
                first: {
                    box: false
                },
                second: {
                    box: []
                }
            },
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
                        attr: 'v-model',
                        type: 'Boolean',
                        default: 'false',
                        description: '单独使用时的双向绑定值, 选中时为真.'
                    },
                    {
                        attr: 'label',
                        type: 'String',
                        default: '-',
                        description: '单独使用时, label中的值可以代替插槽显示描述文字, 与um-checkbox-group一起使用时, 作为数组中的值'
                    },
                    {
                        attr: 'name',
                        type: 'String',
                        default: '-',
                        description: '对应input中的name属性'
                    },
                    {
                        attr: 'size',
                        type: 'Number',
                        default: '20',
                        description: '大小属性, 单位为px'
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
                        type: 'Array',
                        default: '-',
                        description: 
                            '使用um-checkbox-group时的双向绑定值, 选中时向数组添加选中的um-checkbox中的label值.'
                    }
                ]
            }
            
        }
    }
}
</script>

<style lang="scss">
</style>