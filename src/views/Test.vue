<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
 * @Date: 2021-09-23 14:39:43
 * @LastEditTime: 2021-09-23 21:54:30
-->
<template>
  <div>
      <h1>Test</h1>
      <um-menu @indexChange="printVal">
            <um-menu-item index="1">123</um-menu-item>
            <um-menu-item index="2">234</um-menu-item>
            <um-menu-item index="3">345</um-menu-item>
      </um-menu>
  </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
            value: 0
        }
    },
    methods: {
        printVal(val) {
            console.log(val)
        }
    }
}
</script>

<style>

</style>