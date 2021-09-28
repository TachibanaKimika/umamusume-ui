<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
 * @Date: 2021-09-23 23:53:22
 * @LastEditTime: 2021-09-27 19:27:41
-->
<template>
    <div 
    class="um-component um-card"
    :style="{
        '--size': `${size}px`,
        '--width': width===-1?'100%':`${width}px`
    }"
    >
        <div 
        class="um-card__title"
        :style="{
            backgroundColor: headerColor
        }">
            {{title}}
            <span
            class="um-card__title__icon"
            :class="showMoreInfo?'um-card-icon__common':'um-card-icon__reserve'"
            @click="showOrClose"
            v-if="$slots.moreinfo"
            >
                <i 
                class="um-icon-arrow-down-bold"
                ></i>
            </span>
        </div>
        <div class="um-card__body" v-if="$slots.default">
            <slot></slot>
        </div>
        <div 
        class="um-card__moreinfo" 
        :style="{ 
            maxHeight: maxHeight
             }"
        :class="!showMoreInfo?'um-card__moreinfo__hidden':''"
        >
            <div 
            class="um-card__moreinfo__inner"
            ref="moreinfo"
            >
                <slot name="moreinfo"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'um-card',
    props: {
        title: {
            type: String,
            default: 'title'
        },
        size: {
            type: Number,
            default: 20
        },
        width: {
            type: Number,
            default: -1
        },
        headerColor: {
            type: String,
            default: '#57cd24'
        }
    },
    data() {
        return {
            showMoreInfo: false,
            maxHeight: '0'
        }
    },
    methods: {
        showOrClose() {
            let contentHeight = this.$refs.moreinfo.offsetHeight;
            if(this.showMoreInfo) {
                this.maxHeight = '0px',
                this.$emit('showOrClose','close')
            }else {
                this.maxHeight = `${contentHeight + 32}px`
                this.$emit('showOrClose','show')
            }
            this.showMoreInfo = !this.showMoreInfo
        }
    }
}
</script>

<style lang="scss">
.um-card {
    $size: var(--size) !global;
    $width: var(--width) !global;

    background-color: white;
    box-shadow: 0 0 4px #000;
    border-radius: 4px 4px 4px 4px;
    display: inline-block;
    overflow: hidden;
    position: relative;
    width: $width;
    &__title {
        border-radius: 4px 4px 0 0;
        color: white;
        font-size: calc($size * 1.3);
        font-weight: bold;
        padding: calc($size / 2) calc($size * 1);

        .um-card__title__icon {
            position:absolute;
            right: $size;
            top: calc($size / 3);
            transition: all 0.5s;
        }

        .um-card-icon__common {
            transform: rotate(180deg) translate(0, calc($size / (-3)));

        }

        .um-card-icon__reserve {
            transform: rotate(0);
        }
    }
    
    &__body {
        color: #593b00;
        font-size: $size;
        font-weight: bold;
        padding: calc($size / 2) calc($size * 1);
    }

    &__moreinfo{
        @extend .um-card__body;
        padding: 0;
        transition: max-height .4s ease-in-out;
        overflow: hidden;

        .um-card__moreinfo__inner {
            background-color: rgb(238, 238, 238);
            border-radius: 4px 4px;
            margin: $size;
        }
    }
}

</style>