<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
    <div>
        <div class="components-show">
            <um-card title="标签组件">
                <div class="components-group">
                    <p>默认标签</p>
                    <um-tag >bar</um-tag>
                    <um-tag bgType="golden">foo</um-tag>
                    <um-tag bgType="colorful" iconType="01">baz</um-tag>
                </div>
                <div class="components-group">
                    <p>自定义大小</p>
                    <um-tag :size="30">bar</um-tag>
                    <um-tag :size="30" bgType="golden">foo</um-tag>
                    <um-tag :size="30" bgType="colorful">baz</um-tag>
                </div>
                <div class="components-group">
                    <p>也可以往里面塞html</p>
                    <um-tag :size="30" bgType="colorful" @click.native="cons">
                        <div style="padding:0 30px">
                            <um-input placeholder="um-input"></um-input>
                        </div>
                    </um-tag>
                </div>
                <template slot="moreinfo">
                    <div class="components_code">
                        <pre v-highlightjs="sourcecode">
                            <code class="xml"></code>
                        </pre>
                    </div>
                </template>
            </um-card>
            <um-card title="标签图片">
                <template slot="moreinfo">
                    <div class="icon">
                        <um-tag v-for="(item, index) in icons" :iconType="item" :key="index" :size="40">iconType="{{item}}"</um-tag>
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
    <p>默认标签</p>
    <um-tag >bar</um-tag>
    <um-tag bgType="golden">foo</um-tag>
    <um-tag bgType="colorful">baz</um-tag>
</div>
<div class="components-group">
    <p>自定义大小</p>
    <um-tag :size="30">bar</um-tag>
    <um-tag :size="30" bgType="golden">foo</um-tag>
    <um-tag :size="30" bgType="colorful">baz</um-tag>
</div>
<div class="components-group">
    <p>也可以往里面塞html</p>
    <um-tag :size="30" bgType="colorful" @click.native="func">
        <div style="padding:0 30px">
            <h1>foo</h1>
        </div>
    </um-tag>
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
                        attr: 'size',
                        type: 'Number',
                        default: '20',
                        description: '标签大小, 单位为px'
                    },
                    {
                        attr: 'minWidth',
                        type: 'Number',
                        default: '0',
                        description: '标签最小宽度'
                    },
                    {
                        attr: 'maxWidth',
                        type: 'Number',
                        default: '0',
                        description: '标签最大宽度'
                    },
                    {
                        attr: 'bgType',
                        type: 'String',
                        default: 'common',
                        description: '提供common/golden/colorful三种样式'
                    },
                    {
                        attr: 'iconType',
                        type: 'String',
                        default: '-',
                        description: '提供标签开始时的图像'
                    },
                ]
            },
            icons: ['01', '02', '03', '04', '05', '06', '07', '07_a', '08', '08_a', '09', '09_a', '10', '11', '12', '12_a', '13', '14', '15', '16', '17']
        }
    },
    methods: {
        cons(){
            console.log('123')
        }
    }
}
</script>

<style lang="scss" scoped>
.um-card {
    margin-bottom: 80px;
}
.um-tag {
    margin: 10px;
}

.icon .um-tag {
    width: 400px;
}
</style>