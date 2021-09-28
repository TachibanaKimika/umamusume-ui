<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
    <div 
    class="um-component um-tag um-tag__main" 
    :class="`um-tag__bg__${bgType}`"
    :style="{
        maxWidth: maxWidth!==0?`${maxWidth}px`:null,
        minWidth: minWidth!==0?`${minWidth}px`:null,
        fontSize: `${size*0.8}px`,
        '--lineheight': `${size*1.2}px`,
        '--mini': `${size/10}px`,
        '--miniNegative': `${size/10*-1}px`,
        '--radiusSize': `${size/3}px`,

    }"
    >
    <slot name="icon">
        <img 
        v-if="iconType"
        :src="require(`../assets/skills/i_skill_${iconType}.png`)"
        :style="{
            height: `${size}px`,
            margin: `${size*0.2}px ${size/2}px ${size*0.2}px 0`,
            verticalAlign: `middle`
        }"
        alt="PNG"
        >
    </slot>
        <span class="um-tag__text">
            <slot>

            </slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'um-tag',
        props: {
            size: {
                type: Number,
                default: 20
            },
            minWidth: {
                type: Number,
                default: 0
            },
            maxWidth: {
                type: Number,
                default: 0
            },
            bgType: {
                type: String,
                default: 'common'
            },
            iconType: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss">
.um-tag__main {
    $mini: var(--mini) !global;
    $miniNegative: var(--miniNegative) !global;
    $radiusSize: var(--radiusSize) !global;
    background-clip: padding-box, border-box;
    background-origin: border-box;
    border:  $mini solid transparent;
    border-radius: $radiusSize;
    box-shadow: 0px $mini 0px rgba(94, 94, 94, 0.5);
    color: rgb(89, 59, 0);
    cursor: pointer;
    display: inline-block;
    font-weight: bold;
    line-height : var(--lineheight);
    outline: 0;
    padding: 0px calc($mini * 2) 0px $mini;
    position: absolute;
    text-align: left;
    text-shadow: 0 calc($mini * 0.5) white, calc($mini * 0.5) 0 white, calc($mini * (-0.5)) 0 white, 0 calc($mini * (-0.5)) white;
    span {
        vertical-align: middle;
    }
}

.um-tag__bg__common {
    background-image: linear-gradient(to right, rgb(245, 245, 245) 0%, rgb(225, 225, 225) 60%, rgb(170, 170, 170) 100%), linear-gradient(to right, rgb(222, 222, 222) 0%, rgb(202, 202, 202) 60%, rgb(150, 150, 150) 100%);
    position: relative;
    /* &::after{
        position: absolute;
        top: $miniNegative;
        bottom: $miniNegative;
        left: $miniNegative;
        right: $miniNegative;
        background-image: linear-gradient(to right, rgb(222, 222, 222) 0%, rgb(202, 202, 202) 60%, rgb(150, 150, 150) 100%);
        content: '';
        z-index: -1;
        border-radius: $radiusSize;
    } */
    
}

.um-tag__bg__golden {
    @extend .um-tag__bg__common;
    background-image: linear-gradient(to right, rgb(255, 245, 180) 0%, rgb(255, 205, 104) 60%, rgb(255, 179, 0) 100%), linear-gradient(to right, rgb(255, 235, 105) 0%, rgb(255, 191, 63) 75%, rgb(255, 136, 0) 100%);
    /* &::after{
        background: linear-gradient(to right, rgb(255, 235, 105) 0%, rgb(255, 191, 63) 75%, rgb(255, 136, 0) 100%);
    } */
}

.um-tag__bg__colorful {
    @extend .um-tag__bg__common;
    background-image: linear-gradient(to right, rgb(230, 255, 180) 0%, rgb(180, 246, 255) 25%, rgb(180, 199, 255) 50%, rgb(214, 180, 255) 75%, rgb(255, 180, 243) 100%), linear-gradient(to right, rgb(152, 255, 93) 0%, rgb(77, 255, 231) 25%, rgb(99, 146, 255) 50%, rgb(203, 99, 255) 75%, rgb(255, 120, 255) 100%);
    /* &::after{
        background: linear-gradient(to right, rgb(152, 255, 93) 0%, rgb(77, 255, 231) 25%, rgb(99, 146, 255) 50%, rgb(203, 99, 255) 75%, rgb(255, 120, 255) 100%);
    } */
}
</style>