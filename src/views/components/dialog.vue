<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
    <div>
        <div class="components-show">
            <um-card title="对话框组件">
                <div class="components-group">
                    <p>默认对话框</p>
                    <um-button @click="dialog.first.visible=true">打开对话框</um-button>
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
        <um-dialog title="对话框标题" :visible.sync="dialog.first.visible">
            <div>
                <p>对话框内容</p>
            </div>

            <template v-slot:footer>
                <div style="padding:20px">
                    对话框的footer
                    <div>
                        <um-button circleBox @click="dialog.first.visible=false">
                            <i class="um-icon-close"></i>
                        </um-button>
                    </div>
                </div>
            </template>
        </um-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sourcecode: `<div class="components-group">
    <p>默认对话框</p>
    <um-button @click="dialog.first.visible=true">打开对话框</um-button>
</div>`,
            sourcecodeJS: `dialog: {
    first: {
        visible: false,
    }
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
                        attr: 'title',
                        type: 'String',
                        default: 'title',
                        description: `对话框的标题, 若没有'title'的具名插槽, 则对话框显示该标题`
                    },
                    {
                        attr: 'align',
                        type: 'String',
                        default: 'left',
                        description: '对话框文字的对齐方式, 可选left/center/right'
                    },
                    {
                        attr: 'width',
                        type: 'String',
                        default: '1000px',
                        description: '对话框的宽度, 可以为800px, 也可为80% ,80vw等'
                    },
                    {
                        attr: 'top',
                        type: 'String',
                        default: '15vh',
                        description: '对话框对顶部的距离, 可以为其他单位'
                    },
                    {
                        attr: 'visible',
                        type: 'Boolean',
                        default: 'false',
                        description: '对话框是否显示, 绑定时需要加.sync修饰'
                    },
                    {
                        attr: 'v-slot:title',
                        type: 'html',
                        default: '-',
                        description: '对话框标题的内容'
                    },
                    {
                        attr: '默认插槽',
                        type: 'html',
                        default: '-',
                        description: '对话框的内容'
                    },
                    {
                        attr: 'v-solt:footer',
                        type: 'html',
                        default: '-',
                        description: '对话框底部的内容'
                    }
                ]
            },
            dialog: {
                first: {
                    visible: false,
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