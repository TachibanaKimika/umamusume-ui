<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
    <div class="um-component um-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'um-checkbox-group',
    props: {
        value:{
            type: Array
        }
    },
    provide () {
        return {
            checkboxGroup: this
        }
    },
}
</script>

<style>

</style>