<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
 * @Date: 2021-09-23 22:00:29
 * @LastEditTime: 2021-09-28 15:17:47
-->
<template>
    <div class="qs__main">
        <h3>环境要求</h3>
        <p>支持vue2.x, um-slider只支持webkit内核, </p>
        <h3>使用npm安装</h3>
        <pre v-highlightjs>
            <code class="bash">
npm install um-ui
            </code>
        </pre>
        <h3>在项目中引入</h3>
        <pre v-highlightjs="data"><code class="javascript"></code></pre>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: `import Umui from 'um-ui'`
        }
    }
}
</script>

<style>
.qs__main {
    width: 80%;
    margin: auto;
    
}
</style>