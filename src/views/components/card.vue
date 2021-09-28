<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
  <div>
      <div class="components-show">
            <um-card title="卡片组件">
                <div class="components-group">
                    <p>卡片组件</p>
                    <um-card title="默认使用方式">
                        <h3>内容标题</h3>
                        <p>内容...</p>
                    </um-card>
                </div>
                <div class="components-group">
                    <um-card title="不往默认插槽传内容可以完全折叠">
                        <template slot="moreinfo">
                            <div class="card-moreinfo">
                                在具名插槽moreinfo中的内容, 插入可折叠的内容
                            </div>
                        </template>
                    </um-card>
                </div>
                <div class="components-group">
                    <um-card 
                    title="自定义外观"
                    headerColor="pink"
                    :width="600"
                    @showOrClose="cardClick">
                        <p>宽度以及颜色可以定制</p>
                        <template slot="moreinfo">
                            <div class="card-moreinfo">
                                在具名插槽中插入可折叠的内容
                            </div>
                        </template>
                    </um-card>
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
    <p>卡片组件</p>
    <um-card title="默认使用方式">
        <h3>内容标题</h3>
        <p>内容...</p>
    </um-card>
</div>
<div class="components-group">
    <um-card title="不往默认插槽传内容可以完全折叠">
        <template slot="moreinfo">
            <div class="card-moreinfo">
                在具名插槽moreinfo中的内容, 插入可折叠的内容
            </div>
        </template>
    </um-card>
</div>
<div class="components-group">
    <um-card 
    title="自定义外观"
    headerColor="pink"
    :width="600"
    @showOrClose="cardClick">
        <p>宽度以及颜色可以定制</p>
        <template slot="moreinfo">
            <div class="card-moreinfo">
                在具名插槽中插入可折叠的内容
            </div>
        </template>
    </um-card>
</div>`,
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
                        attr: 'title',
                        type: 'String',
                        default: 'title',
                        description: '卡片的标题'
                    },
                    {
                        attr: 'size',
                        type: 'Number',
                        default: '20',
                        description: '卡片中常规字体的大小'
                    },
                    {
                        attr: 'width',
                        type: 'Number',
                        default: '-1',
                        description: '卡片的宽度, 单位为px, 为默认值-1的时候为父元素的100%'
                    },
                    {
                        attr: 'headerColor',
                        type: 'String',
                        default: '#57cd24',
                        description: '卡片的宽度, 单位为px, 为默认值-1的时候为父元素的100%'
                    },
                    {
                        attr: 'v-slot:moreinfo',
                        type: '具名插槽',
                        default: '-',
                        description: '具名插槽moreinfo, 输入该插槽的内容会被默认隐藏'
                    },
                    {
                        attr: 'v-on:showOrClose',
                        type: '回调函数',
                        default: '-',
                        description: `当卡片展开或关闭时触发, 返回当前的动作('show'/'close')`
                    },
                ]
            },
        }
    },
    methods: {
        cardClick(val){
            console.log(val)
        }
    }
}
</script>

<style>
.card-moreinfo {
    padding: 10px;
}
</style>