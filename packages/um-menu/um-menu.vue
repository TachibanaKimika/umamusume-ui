<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
 * @Date: 2021-09-23 14:44:19
 * @LastEditTime: 2021-09-27 19:28:11
-->
<template>
    <div 
    class="um-component um-menu"
    :class="mode==='vertical'?'um-menu__vertical':''"
    :style="{
        '--size': `${size}px`,
        '--width': width===-1?`100%`:`${width}px`
    }"
    >
        <ul 
        class="um-menu__item"
        >
            <slot></slot>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'um-menu',
    props: {
        defaultActiveIndex: {
            type: String,
            default: '1'
        },
        mode: {
            type: String,
            default: 'horizontal'
        },
        route: {
            type: Boolean,
            default: false
        },
        size: {
            type: Number,
            default: 20
        },
        width: {
            type: Number,
            default: -1
        }
    },
    provide() {
        return {
            umMenu: this
        }
    },
    data() {
        return {
            activeIndex: 0
        }
    },
    
    mounted() {
        this.activeIndex = this.defaultActiveIndex
    },
    watch: {
        activeIndex: function(val) {
            this.$emit('indexChange', val)
        }
    }
}
</script>

<style lang="scss">
ul, li {
    list-style: none;
    padding: 0px;
    margin: 0px;
}

.um-menu {
    $size: var(--size);

    /* background-color: #dcffcd; */
    border-bottom: 2px solid #dcdee2;
    font-size: calc($size * 0.75);
    font-weight: bold;
    /* padding: 0 calc($size * 0.75); */
    text-align: left;
    width: 100%;
}

.um-menu__item {
    margin: 0;
}

.um-menu__vertical {
    @extend .um-menu;
    border-bottom: 0;
    border-right: 2px solid #dcdee2;
    padding: 0;
    width: var(--width);
    // width: 180px;
}

</style>