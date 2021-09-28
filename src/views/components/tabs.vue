<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
    <div>
        <div class="components-show">
            <um-card title="标签页组件">
                <div class="components-group">
                    <p>可在um-tab-pane中填入html</p>
                    <div>
                        <um-tabs>
                            <um-tab-pane label="bar">
                                <h1>bar</h1>
                            </um-tab-pane>
                            <um-tab-pane label="foo">
                                <h2>foo</h2>
                            </um-tab-pane>
                            <um-tab-pane label="baz">
                                <h3>baz</h3>
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
                        attr: 'label',
                        type: 'String',
                        default: '',
                        description: '必填, 此label的值会作为um-tabs中的标识符'
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