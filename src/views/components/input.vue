<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
 * @Date: 2021-09-25 22:24:17
 * @LastEditTime: 2021-09-29 17:16:10
-->
<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
    <div>
        <div class="components-show">
            <um-card title="输入框组件">
                <div class="components-group">
                    <p>默认使用</p>
                    <div class="inline-box">
                        <um-input v-model="testdata.first.text_1" placeholder="默认用法"></um-input>
                    </div>
                    <div class="inline-box">
                        <um-input v-model="testdata.first.text_1" disabled placeholder="禁用形式"></um-input>
                    </div>
                </div>
                <div class="components-group">
                    <p>显示密码/一键清空</p>
                    <div class="inline-box">
                        <um-input v-model="testdata.first.text_2" placeholder="可清空" clearable></um-input>
                    </div>
                    <div class="inline-box">
                        <um-input v-model="testdata.first.text_2" type="password" placeholder="可显示密码" showPassword></um-input>
                    </div>
                    <div class="inline-box">
                        <um-input v-model="testdata.first.text_2" type="password" placeholder="可清空以及显示密码" clearable showPassword></um-input>
                    </div>
                </div>
                <div class="components-group">
                    <p>自定义样式</p>
                    <div class="inline-box">
                        <um-input v-model="testdata.first.text_3" :size="60" placeholder="自定义高度" clearable></um-input>
                    </div>
                    <div class="inline-box">
                        <um-input v-model="testdata.first.text_3" placeholderAlign="center" placeholder="提示文本居中显示"></um-input>
                    </div>
                    <div class="inline-box">
                        <um-input v-model="testdata.first.text_3" mainTextAlign="center" placeholder="输入文本居中显示" clearable showPassword></um-input>
                    </div>
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
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sourcecode: `<div class="components-group">
    <p>默认使用</p>
    <div class="inline-box">
        <um-input v-model="testdata.first.text_1" placeholder="默认用法"></um-input>
    </div>
    <div class="inline-box">
        <um-input v-model="testdata.first.text_1" disabled placeholder="禁用形式"></um-input>
    </div>
</div>
<div class="components-group">
    <p>显示密码/一键清空</p>
    <div class="inline-box">
        <um-input v-model="testdata.first.text_2" placeholder="可清空" clearable></um-input>
    </div>
    <div class="inline-box">
        <um-input v-model="testdata.first.text_2" type="password" placeholder="可显示密码" showPassword></um-input>
    </div>
    <div class="inline-box">
        <um-input v-model="testdata.first.text_2" type="password" placeholder="可清空以及显示密码" clearable showPassword></um-input>
    </div>
</div>
<div class="components-group">
    <p>自定义样式</p>
    <div class="inline-box">
        <um-input v-model="testdata.first.text_3" :size="60" placeholder="自定义高度" clearable></um-input>
    </div>
    <div class="inline-box">
        <um-input v-model="testdata.first.text_3" placeholderAlign="center" placeholder="提示文本居中显示"></um-input>
    </div>
    <div class="inline-box">
        <um-input v-model="testdata.first.text_3" mainTextAlign="center" placeholder="输入文本居中显示" clearable showPassword></um-input>
    </div>
</div>`,
            testdata: {
                first: {
                    text_1: '',
                    text_2: '',
                    text_3: ''
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
                        type: 'String',
                        default: '-',
                        description: '与input双向绑定的值'
                    },
                    {
                        attr: 'type',
                        type: 'String',
                        default: 'text',
                        description: 'input框的原生属性, 支持text/password'
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
                        default: '40',
                        description: 'input的大小, 单位为px'
                    },
                    {
                        attr: 'placeholder',
                        type: 'String',
                        default: '-',
                        description: '当input为空时使用的文本'
                    },
                    {
                        attr: 'disabled',
                        type: 'Boolean',
                        default: 'false',
                        description: '是否禁用'
                    },
                    {
                        attr: 'clearable',
                        type: 'Boolean',
                        default: 'false',
                        description: '是否可清空'
                    },
                    {
                        attr: 'showPassword',
                        type: 'Boolean',
                        default: 'false',
                        description: '是否有展示密码的按钮(仅当type="password"时生效)'
                    },
                    {
                        attr: 'placeholderAlign',
                        type: 'String',
                        default: 'left',
                        description: 'placeholder的对齐方向'
                    },
                    {
                        attr: 'mainTextAlign',
                        type: 'String',
                        default: 'left',
                        description: '主文本的对齐方向'
                    }
                ]
            }
            
        }
    }
}
</script>

<style lang="scss">
</style>