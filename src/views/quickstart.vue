<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
 * @Date: 2021-09-23 22:00:29
 * @LastEditTime: 2021-10-09 11:06:35
-->
<template>
    <div class="qs__main code">
        <h3>环境要求</h3>
        <p>Vue2组件库, ie未作适配</p>
        <h3>使用npm安装</h3>
        <pre v-highlightjs>
            <code class="bash">npm install umamusume-ui</code>
        </pre>
        <h3>在项目中引入</h3>
        <pre v-highlightjs="data"><code></code></pre>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: `import UmamusumeUI from 'umamusume-ui'
import 'umamusume-ui/lib/umamusume-ui.css'
Vue.use(UmamusumeUI)`
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