<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
    <div 
        class="um-component um-slider" 
        :style="{
            '--size': size+'px',
            '--slider-inner-linear-gradient':`linear-gradient( to right, #b5ff18 ${((value-min)/(max-min))*100}%, #6a6a6a ${((value-min)/(max-min))*100}%)`,
            '--slider-inner-linear-gradient-disabled':`linear-gradient( to right, #a4dd07 ${((value-min)/(max-min))*100}%, #595959 ${((value-min)/(max-min))*100}%)`,
            '--thumb-position-left':`${size*((value-min)/(max-min)-0.5)}px`
        }"
    >

        <div class="um-slider__main">
            <input 
                class="um-slider__inner" 
                :class="disabled?'um-slider-disabled':''"
                :disabled="disabled"
                ref="slider__inner" 
                type="range" 
                :step="step" 
                :min="min" 
                :max="max"
                :value="value" @input="handleInput">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'um-slider',
        props: {
            value: {
                type: Number,
                default: 0
            },
            step: {
                type: Number,
                default: 1
            },
            max: {
                type: Number,
                default: 100
            },
            min: {
                type: Number,
                default: 0
            },

            size: {
                type: Number,
                default: 20
            },
            disabled: {
                type: Boolean,
                default: false
            }

        },
        methods: {
            handleInput(e) {
                this.$emit('input', e.target.value)
            }
        },
    }
</script>

<style lang="scss">
    .um-slider__main {
        position: relative;
    }


    .um-slider__inner {
        -webkit-appearance: none;
        $size: var(--size) !global;
        background-color: transparent;
        width: 100%;

        &::-webkit-slider-runnable-track {
            -webkit-appearance: none;
            background-image: var(--slider-inner-linear-gradient);
            border-radius: calc($size / 4);
            box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.6);
            height: calc($size / 2);
            /* margin: 0; */
            outline: none;
            margin-left: -10px;
            width: 100%;
        }

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            background-image: url('../assets/images/umbtn_circle_bg.png'), linear-gradient(180deg, rgb(255, 255, 255), rgb(255, 255, 255));
            /* background-color: #3a3a3a; */
            background-repeat: no-repeat;
            background-size: 100% 100%;
            border: 0.1px solid #616161;
            border-radius: 100% 100%;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.6);
            cursor: pointer;
            height: $size;
            /* margin: 7px; */
            left: var(--thumb-position-left);
            margin-top: calc($size / 4 * (-1));
            position: relative;
            width: $size;
        }

        &:hover::-webkit-slider-thumb {
            background-image: url('../assets/images/umbtn_circle_bg.png'), linear-gradient(180deg, rgb(230, 230, 230), rgb(230, 230, 230));
        }
    }

    .um-slider__marker__single {
        display: inline-block;
        font-size: 0.1px;
        position: absolute;
    }

    .um-slider-disabled {
        @extend .um-slider__inner;
        background-color: rgba(79, 55, 0, 0.15);
        cursor: not-allowed;

        &::-webkit-slider-thumb {
            background-image: url('../assets/images/umbtn_circle_bg.png'), linear-gradient(180deg, rgb(175, 175, 175), rgb(175, 175, 175));
            cursor: not-allowed;
        }

        &:hover::-webkit-slider-thumb {
            background-image: url('../assets/images/umbtn_circle_bg.png'), linear-gradient(180deg, rgb(175, 175, 175), rgb(175, 175, 175));
        }

        &::-webkit-slider-runnable-track {
            background-image: var(--slider-inner-linear-gradient-disabled);
        }
    }
</style>