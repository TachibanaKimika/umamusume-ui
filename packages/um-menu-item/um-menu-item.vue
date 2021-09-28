<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
 * @Date: 2021-09-23 14:47:06
 * @LastEditTime: 2021-09-27 19:28:08
-->
<template>
    <li 
    class="um-component um-menu-item"
    :class="`${umMenu?umMenu.activeIndex===index?'um-menu-item__active':'':''} ${umMenu.mode==='vertical'?'um-menu-item__vertical':''}`"
    @click="handleActiveIndex"
    :style="{
        '--size': `${umMenu.size}px`,
        '--width': umMenu.width===-1?`100%`:`${umMenu.width}px`,
    }"
    >
        <div 
        class="um-menu-item__main"
        >
            <slot></slot>
            <transition name="fade">
                <span class="active" v-if="umMenu?umMenu.activeIndex===index?true:false:false"></span>
            </transition> 
        </div>
    </li>
</template>

<script>
export default {
    name: 'um-menu-item',
    props: {
        index: {
            type: String,
            default: ''
        }
    },
    inject: {
        umMenu: {
            default: ''
        }
    },
    methods: {
        handleActiveIndex() {
            this.$parent.activeIndex=this.index
            if(this.umMenu && this.umMenu.route && this.$router && (this.$route.path != this.index)) {
                this.$router.push(this.index)
            }
        }
    },
}
</script>

<style lang="scss">

/* 水平模式的菜单 */
.um-menu-item {
    $size: var(--size) !global;
    color: #96845e;
    cursor: pointer;
    display: inline-block;
    margin: 0 8px;
    position: relative;
    text-align: center;
    &__main:hover {
        background-color: #b2ff9dbf;
        /* border-radius: 5px; */
        transform: scale(0.95);
        transition: all 0.2s;
    }
    &__main {
        padding: calc($size * 0.6) $size;
    }
}

.um-menu-item__active {
    @extend .um-menu-item;
    color: #6a5732;
}

span.active {
    background-color: #00ff08;
    border-radius: 1px;
    bottom: 3px;
    height: 2px;
    left: 0;
    position: absolute;
    transform: scaleX(0.7);
    width:100%;
}

.fade-enter-active  {
    animation: fadeIn .3s;
    animation-timing-function: linear;
}

.fade-leave-active {
    @extend .fade-enter-active;
    animation: fadeOut .3s;
}


/* 垂直模式 */
.um-menu-item__vertical {
    @extend .um-menu-item;
    display: block;
    margin: 0;
    width: var(--width);
    .um-menu-item__main {
        margin: 10px 0;
        &:hover {
            border-radius: 0;
        }
    }

}
</style>