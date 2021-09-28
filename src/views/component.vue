<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
 * @Date: 2021-09-23 14:14:30
 * @LastEditTime: 2021-09-27 19:39:19
-->
<template>
    <div class="main">
        <div class="siderBar">
            <um-menu route mode="vertical">
                <um-menu-item index="/component/button">Button(按钮)</um-menu-item>
                <um-menu-item index="/component/card">Card(卡片)</um-menu-item>
                <um-menu-item index="/component/checkbox">CheckBox(多选框)</um-menu-item>
                <um-menu-item index="/component/dialog">Dialog(对话框)</um-menu-item>
                <um-menu-item index="/component/icon">Icon(图标)</um-menu-item>
                <um-menu-item index="/component/input">Input(输入框)</um-menu-item>
                <um-menu-item index="/component/menu">Menu(菜单)</um-menu-item>
                <um-menu-item index="/component/radio">Radio(单选框)</um-menu-item>
                <um-menu-item index="/component/slider">Slider(滑动条)</um-menu-item>
                <um-menu-item index="/component/switch">Switch(开关)</um-menu-item>
                <um-menu-item index="/component/tabs">Tabs(标签页)</um-menu-item>
                <um-menu-item index="/component/table">Table(表格)</um-menu-item>
                <um-menu-item index="/component/tag">Tag(标签)</um-menu-item>
            </um-menu>
        </div>
        <div class="main__view">
            <div style="padding-right: 20px">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.main {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.siderBar { 
    grid-area: 1 / 1 / 6 / 2; 
    }
.main__view { 
    grid-area: 1 / 2 / 6 / 6; 
    padding: 40px;
    width: 90%;
    }
</style>