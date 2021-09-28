<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
    <div v-if="show" class="um-component um-tab-pane um-tab__pane__wrap">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'um-tab-pane',
    props: {
        label: {
            type: String,
            default: ''
        }
    },
    inject: ['Tabs'],
    data() {
        return {
            show: true
        }
    },
    mounted() {
        this.Tabs.initTabs()
    },
    watch: {
        name() {
            this.Tabs.initTabs()
        }
    }
}
</script>

<style lang="scss">
.um-tab__pane__wrap{
    background-color: #f3f3f3;
    border-radius: 10px;
    padding: 10px;
}
</style>