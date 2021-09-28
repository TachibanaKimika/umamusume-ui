<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
    <div>
        <div class="components-show">
            <um-card title="菜单组件">
                <div class="components-group">
                    <p>默认样式</p>
                    <um-menu :size="30">
                        <um-menu-item index="1">foo</um-menu-item>
                        <um-menu-item index="2">bar</um-menu-item>
                        <um-menu-item index="3">baz</um-menu-item>
                    </um-menu>
                </div>
                
                <div class="components-group" style="width: 30%">
                    <p>垂直样式</p>
                    <um-menu mode="vertical" defaultActiveIndex="2" :size="30">
                        <um-menu-item index="1">foo</um-menu-item>
                        <um-menu-item index="2">bar</um-menu-item>
                        <um-menu-item index="3">baz</um-menu-item>
                    </um-menu>
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
    <p>默认样式</p>
    <um-menu :size="30">
        <um-menu-item index="1">foo</um-menu-item>
        <um-menu-item index="2">bar</um-menu-item>
        <um-menu-item index="3">baz</um-menu-item>
    </um-menu>
</div>

<div class="components-group" style="width: 30%">
    <p>垂直样式</p>
    <um-menu mode="vertical" defaultActiveIndex="2" :size="30">
        <um-menu-item index="1">foo</um-menu-item>
        <um-menu-item index="2">bar</um-menu-item>
        <um-menu-item index="3">baz</um-menu-item>
    </um-menu>
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
                        attr: 'defaultActiveIndex',
                        type: 'String',
                        default: '1',
                        description: '初始化时选中item中的index值'
                    },
                    {
                        attr: 'mode',
                        type: 'String',
                        default: 'horizontal',
                        description: '菜单的显示方式, 有horizontal(水平)以及vertical(垂直)两种'
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
                        description: 'item的大小属性, 单位为px'
                    },
                    {
                        attr: 'width',
                        type: 'Number',
                        default: '-1',
                        description: 'item的宽度属性, 单位为px, 仅当模式为vertical时有效'
                    },
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