<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
    <div 
    :class="`um-component um-button umb-${type} ${circle?'um-button-circle':circleBox?'um-button-circle-box':''}`" 
    @click="handleClick"
    :style="{
        '--fontsize': `${size}px`
    }"
    >
        <i class="um-button__notion um-icon-prompt-filling" v-if="notion"></i>
        <span class="um-button__inner">
            <slot></slot>
        </span>
    </div>
</template>

<script>
  export default {
    name: 'um-button',
    props: {
        type: {
            type: String,
            default: 'white'
        },
        circle: {
            type: Boolean,
            default: false
        },
        circleBox: {
            type: Boolean,
            default: false
        },
        size: {
            type: Number,
            default: 20
        },
        notion: {
            type: Boolean,
            default: false
        },
    },
    methods:{
        handleClick(e){
            this.$emit('click', e)
        }
    }
  }
</script>

<style lang="scss" scoped>
.um-button {
    $size: var(--fontsize) !global;
    border-radius: calc($size * 0.75) ;
    box-shadow: 0px 3px 0px #3838388a;
    cursor: pointer;
    display: inline-block;
    line-height: 2;
    padding: calc($size / 10) calc($size / 2);
    position: relative;
    text-align: center;
    transition: all 0.05s linear;
    user-select: none;
    .um-button__inner {
        font-size: calc($size);
        font-weight: bold;
        z-index: 4;
    }
    &:hover {
        transform: scale(0.9);
    }
    .um-button__notion {
        color: #ff0095;
        font-size: calc($size * 1.25);
        position: absolute;
        right: 0;
        top: calc($size * -1.25);
    }
}
.umb-green {
    background-color: #aaff00;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border: 1.9px solid #005e00;
    color: white;
    z-index: 0;
    span {
        -webkit-text-stroke: 0.5px #fff;
    }
    &:after {
        background-image: url('../assets/images/umbtn_bg.png') ,linear-gradient(180deg, #aaff00,#5fcb00);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        border-radius: calc($size * 0.75);
        content: '';
        display: inline-block;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        transform: scale(0.97, 0.95);
        width: 100%;
        z-index: -1;
    }
}
.umb-white {
    background-color: #ffffff;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border: 1.9px solid #686868;
    color: #593b00;
    z-index: 0;
    span {
        -webkit-text-stroke: 1px #593b00;
    }
    &:after {
        background-image: url('../assets/images/umbtn_bg.png') ;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        border-radius: calc($size * 0.75);
        content: '';
        display: inline-block;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        transform: scale(0.97, 0.95);
        width: 100%;
        z-index: -1;
    }
}
.um-button__notion {
    animation: bounceCustom 3s infinite;
}


.um-button-circle {
    @extend .um-button;
    border-radius: calc($size * 2) calc($size * 2);
    bottom: calc($size * (-0.4));
    height: calc($size * 2);
    line-height: calc(2 / 1.5);
    padding: 0;
    width: calc($size * 2);
    .um-button__inner {
        i {
            font-size: calc($size * 1.5);
            /* vertical-align: center; */
        }
        
    }
    .um-button__notion {
        position: absolute;
        right: 0;
        top: calc($size * (-1));
    }
    
    
}
.um-button-circle.umb-green {
    @extend .umb-green;
    &:after {
        border-radius: $size $size;
        transform: scale(0.95, 0.95);
    }
}
.um-button-circle.umb-white {
    @extend .umb-white;
    &:after {
        border-radius: $size $size;
        transform: scale(0.95, 0.95);
    }
}
.um-button-circle-box {
    border-radius: calc($size * 0.3) calc($size * 0.3);
    bottom: calc($size * (-0.4));
    height: calc($size * 2);
    line-height: calc(2 / 1.5);
    padding: 0;
    width: calc($size * 2);
    .um-button__inner {
        i {
            font-size: calc($size * 1.5);
            /* vertical-align: center; */
        }
        
    }
    .um-button__notion {
        position: absolute;
        right: 0;
        top: calc($size * (-1));
    }
    
    &:after {
        border-radius: calc($size * 0.3) calc($size * 0.3);
        transform: scale(0.95, 0.95);
    }
}

@keyframes bounceCustom {
    from,
  73%,
  83%,
  to {
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: translate3d(0, 0, 0);
    }
    79%,
  80% {
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        transform: translate3d(0, -30px, 0) scaleY(1.1);
    }
    89% {
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        transform: translate3d(0, -15px, 0) scaleY(1.05);
    }
    92% {
        transform: translate3d(0, 0, 0) scaleY(0.95);
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    96% {
        transform: translate3d(0, -4px, 0) scaleY(1.02);
    }
}
</style>