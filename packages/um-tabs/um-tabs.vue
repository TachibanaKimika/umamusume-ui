<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
    <div class="um-component um-tabs">
        <div ref="navWrap" class="um-tabs__wrap">
            <div 
            class="um-tabs__tab" 
            v-for="(item, index) in navList" 
            :class="activeKey===item.label?'um-tabs__active':''"
            :key="index" 
            @click="handleChange(index)"
            :style="{'width': 95/navList.length+'%'}"
            >
                <span>{{item.name?item.name:item.label}}</span>
            </div>
        </div>
        <div class="um-tab-pane__content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'um-tabs',
        props: {
            value: {
                type: [String, Number]
            },
            active: {
                type: String,
                default: undefined
            }
        },
        provide() {
            return {
                Tabs: this
            }
        },
        data() {
            return {
                navList: [],
                activeKey: this.value,
                // activeIndex: 0
            }
        },
        methods: {
            initTabs() {
                this.updateNav()
                this.updateStatus()
            },
            getAllPanes() {
                return this.$children.filter(item => item.$options.name === 'um-tab-pane')
            },
            updateNav() {
                this.navList = []
                this.getAllPanes().forEach((pane, index) => {
                    this.navList.push({
                        label: pane.label,
                        index: index
                    })
                    //如果不传value,默认选中第一项
                    if (index === 0 && !this.activeKey) {
                        this.activeKey = pane.label
                    }
                })
            },
            updateStatus() {
                const tabs = this.getAllPanes()
                tabs.forEach(tab => (tab.show = tab.label === this.activeKey))
                this.$emit('input', this.activeKey)
            },
            handleChange(index) {
                const nav = this.navList[index]
                this.activeKey = nav.label
                // this.activeIndex = index
            }
        },
        watch: {
            value(val) {
                this.activeKey = val
            },
            activeKey() {
                this.updateStatus()
            }
        }
    }
</script>
<style lang="scss">
    .um-tabs__wrap {
        /* position: relative; */
        /* border-bottom: 1px solid #dcdee2; */
        text-align: center;
        margin-bottom: 16px;
        white-space: nowrap;
        
    }

    .um-tabs__tab {
        background-image: linear-gradient(180deg, rgb(255, 255, 255),rgb(188, 188, 188));
        box-shadow: 0 3px 1px #5b5b5bb6;
        border: 1px solid #dcdee2;
        color: rgb(89, 59, 0);
        cursor: pointer;
        display: inline-block;
        font-weight: bold;
        overflow: hidden;
        text-align: center;
        &:first-child{
            border-radius: 20px 0 0 20px;
        }
        &:last-child {
            border-radius: 0 20px 20px 0;
        }
    }
    .um-tabs__active {
        color: #fffd;
        background-image: linear-gradient(180deg, rgb(170, 255, 0),rgb(95, 203, 0));
        border: 1px solid rgb(95, 203, 0);
    }
</style>