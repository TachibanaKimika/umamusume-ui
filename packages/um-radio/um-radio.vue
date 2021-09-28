<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
    <label class="um-component um-radio" :class="{
            'is-checked': label == model ,
            'is-disabled': disabled ,
        }">
        <span class="um-radio__input">
            <span class="um-radio__inner"></span>
            <input 
            type="radio" 
            class="um-radio__original" 
            :value="label" 
            v-model="model"
            :disabled="disabled"
            >
        </span>
        <span class="um-radio__label">
            <slot></slot>
            <!-- 如果没有传值，就把label作为文本显示 -->
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>

<script>
    export default {
        name: 'um-radio',
        props: {
            label: {
                type: [String, Number, Boolean],
                defualt: ''
            },
            value: null,
            name: {
                type: String,
                defualt: ''
            },
            size: {
                type: String,
                defualt: ''
            },
            disabled: {
                type: Boolean,
                defualt: false
            }
        },
        inject: {
            RadioGroup: {
                default: ''
            }
        },
        computed: {
            model: {
                get() {
                    return this.isGroup ? this.RadioGroup.value : this.value
                },
                set(value) {
                    this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
                }
            },
            isGroup() {
                return !!this.RadioGroup
            }
        },
    }
</script>

<style lang="scss">
    .um-radio {
        color: #606266;
        display: inline-block;
        font-size: 14px;
        font-weight: 500;
        line-height: 1;
        margin-right: 30px;
        outline: num;
        position: relative;
        white-space: nowrap;

        .um-radio__input {
            cursor: pointer;
            display: inline-block;
            line-height: 1;
            outline: num;
            position: relative;
            vertical-align: middle;
            white-space: nowrap;
                
            .um-radio__inner {
                background-color: #fff;
                border: 1px solid #5b5b5b43;
                border-radius: 100%;
                box-shadow: 0px 2.5px 2px #3d3d3db5;
                box-sizing: border-box;
                display: inline-block;
                height: 28px;
                position: relative;
                width: 28px;

                &:after {
                    background-image: linear-gradient(180deg, rgb(222, 222, 222), rgb(203, 203, 203));
                    border-radius: 100%;
                    box-shadow: 0 0 2px #5b5b5b inset;
                    content: "";
                    height: 20px;
                    left: 50%;
                    position: absolute;
                    top: 50%;
                    transform: translate(-50%, -50%) scale(1);
                    transition: transform .15s ease-in;
                    width: 20px;
                }
            }

            .um-radio__original {
                bottom: 0;
                left: 0px;
                margin: 0;
                opacity: 0;
                outline: num;
                position: absolute;
                right: 0;
                top: 0;
                z-index: -1;
            }
        }

        .um-radio__label {
            -webkit-text-stroke: 0.4px rgb(106, 87, 50);
            color: rgb(106, 87, 50);
            font-size: 20px;
            font-weight: bold;
            line-height: 28px;
            padding-left: 10px;
            vertical-align: middle;
        }
    }

    // 选中的样式
    .um-radio.is-checked {
        .um-radio__input {
            .um-radio__inner {
                &:after {
                    background-image: linear-gradient(180deg, rgb(176, 255, 66), rgb(82, 197, 86));
                    transform: translate(-50%, -50%) scale(1);
                }
            }
        }
    }
    .um-radio.is-disabled {
        cursor: not-allowed;
        .um-radio__inner {
            cursor: not-allowed;
            background-image: linear-gradient(to top,rgb(220, 220, 220),rgb(220, 220, 220));
        }
    }
</style>