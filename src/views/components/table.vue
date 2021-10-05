<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
    <div>
        <div class="components-show">
            <um-card title="表格组件">
                <p>基本使用</p>
                <div class="components-group" style="font-weight: normal">
                    <um-table
                    :columns="testdata.first.columns"
                    :data="testdata.first.data"
                    >
                    </um-table>
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
            sourcecode: `<div class="components-group" style="font-weight: normal">
    <um-table
    :columns="testdata.first.columns"
    :data="testdata.first.data"
    >
    </um-table>
</div>`,
            sourcecodeJS:`// testdata
first: {
    columns: ['key', 'value'],
    data: [{
        key: 'bar',
        value: '100',
    },{
        key: 'foo',
        value: '200'
    }]
}`,
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
                        attr: 'data',
                        type: 'Array',
                        default: '-',
                        description: '接收一个对象数组, key为列名, value为数据'
                    },
                    {
                        attr: 'columns',
                        type: 'Array',
                        default: '-',
                        description: `接收一个对象数组, name为表格中数据对应的key值, label为你要显示在表头的名称, width(可选)为你的那一列的宽度, 为该列所占表格的百分比(例如10%), 若key和value一致, 可以简写成由字符串组成的数组`
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
                ]
            },
            testdata: {
                first: {
                    columns: ['key', 'value'],
                    data: [{
                        key: 'bar',
                        value: '100',
                    },{
                        key: 'foo',
                        value: '200'
                    }]
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