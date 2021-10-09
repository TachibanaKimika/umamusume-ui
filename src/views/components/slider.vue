<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
    <div>
        <div class="components-show">
            <um-card title="滑动条组件">
                <div class="components-group">
                    <p>默认滑动条</p>
                    <div style="padding: 15px">
                        <um-slider 
                        v-model="testdata.first.slider1"
                        :min="0"
                        :max="100"
                        >
                        </um-slider>
                    </div>
                    <p>禁用状态</p>
                    <div style="padding: 15px">
                        <um-slider 
                        v-model="testdata.first.slider1"
                        :min="0"
                        :max="100"
                        disabled
                        >
                        </um-slider>
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
    <p>默认滑动条</p>
    <div style="padding: 15px">
        <um-slider 
        v-model="testdata.first.slider1"
        :min="0"
        :max="100"
        >
        </um-slider>
    </div>
    <p>禁用状态</p>
    <div style="padding: 15px">
        <um-slider 
        v-model="testdata.first.slider1"
        :min="0"
        :max="100"
        disabled
        >
        </um-slider>
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
                        type: 'Number',
                        default: '0',
                        description: '双向绑定数据'
                    },
                    {
                        attr: 'step',
                        type: 'Number',
                        default: '1',
                        description: '每次滑动的最小步数'
                    },
                    {
                        attr: 'max',
                        type: 'Number',
                        default: '100',
                        description: '滑动条的最大值'
                    },
                    {
                        attr: 'min',
                        type: 'Number',
                        default: '0',
                        description: '滑动条的最小值'
                    },
                    {
                        attr: 'size',
                        type: 'Number',
                        default: '20',
                        description: '滑动条的大小属性, 单位为px'
                    },
                    {
                        attr: 'disabled',
                        type: 'Boolean',
                        default: 'false',
                        description: '滑动条是否可用'
                    },
                ]
            },
            testdata: {
                first: {
                    slider1: 10
                }
            }
        }
    },
}
</script>

<style lang="scss">
.um-button {
    margin: 5px;
}
</style>