<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
    <div>
        <div class="components-show">
            <um-card title="标签页组件">
                <div class="components-group">
                    <p>通过控制 um-tabs 来切换页面</p>
                    <div>
                        <um-tabs v-model="name">
                            <um-tab-pane label="bar">
                                <h1>Page: bar</h1>
                            </um-tab-pane>
                            <um-tab-pane label="foo">
                                <h2>Page: foo</h2>
                            </um-tab-pane>
                            <um-tab-pane label="baz">
                                <h3>Page: baz</h3>
                            </um-tab-pane>
                        </um-tabs>
                    </div>
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
                <h3>um-tabs</h3>
                <um-table
                :columns="attributionTabs.columns"
                :data="attributionTabs.data"
                >
                </um-table>
            </div>
            <div>
                <h3>um-tab-pane</h3>
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
            name: 'foo',
            sourcecode: `<um-tabs>
    <um-tab-pane label="bar">
        <h1>bar</h1>
    </um-tab-pane>
    <um-tab-pane label="foo">
        <h2>foo</h2>
    </um-tab-pane>
    <um-tab-pane label="baz">
        <h3>baz</h3>
    </um-tab-pane>
</um-tabs>`,
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
                        attr: 'name',
                        type: 'String',
                        default: '',
                        description: '标签页的标题'
                    },
                    {
                        attr: 'label',
                        type: 'String',
                        default: '',
                        description: '必填, 此label的值会作为um-tabs中的标识符, 若tab-pane没有name属性, 标签会显示label'
                    }
                ]
            },
            attributionTabs: {
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
                        type: 'String',
                        default: '',
                        description: '值为选中的标签页的label值'
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