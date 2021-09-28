<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
    <div>
        <div class="components-show">
            <um-card title="开关组件">
                <div class="components-group">
                    <p>默认开关</p>
                    <div style="display: inline-block;padding: 15px;">
                        <um-switch 
                        v-model="testdata.first.value" 
                        showText
                        ></um-switch>
                    </div>
                    <div style="display: inline-block;padding: 15px;">
                        <um-switch v-model="testdata.first.value">Common</um-switch>
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
    <p>默认开关</p>
    <div style="display: inline-block;padding: 15px;">
        <um-switch 
        v-model="testdata.first.value" 
        showText
        ></um-switch>
    </div>
    <div style="display: inline-block;padding: 15px;">
        <um-switch v-model="testdata.first.value">Common</um-switch>
    </div>
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
                        attr: 'v-model',
                        type: 'Boolean',
                        default: 'false',
                        description: '数据的双向绑定, 开关开启时为真, 反之为假'
                    },
                    {
                        attr: 'width',
                        type: 'String',
                        default: '120px',
                        description: '开关的宽度, 也可以为其他单位'
                    },
                    {
                        attr: 'height',
                        type: 'String',
                        default: '40px',
                        description: '开关的高度, 也可以为其他单位'
                    },
                    {
                        attr: 'showText',
                        type: 'Boolean',
                        default: 'false',
                        description: '是否显示开关内的ON/OFF'
                    },
                ]
            },
            testdata: {
                first: {
                    value: true
                }
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