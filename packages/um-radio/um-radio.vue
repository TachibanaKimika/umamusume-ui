<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
    <label class="um-component um-radio" 
    :class="{
        'is-checked': label == model ,
        'is-disabled': disabled ,
    }"
    :style="{
        '--size': `${size}px`
    }"
    >
        <span class="um-radio__input">
            <span class="um-radio__inner">
            <input 
            type="radio" 
            class="um-radio__original" 
            :value="label" 
            v-model="model"
            :disabled="disabled"
            >
                <span class="um-radio__inner__thumb">
                </span>
            </span>
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
                type: Number,
                default: 20
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
        $size: var(--size) !global;
        color: #606266;
        display: inline-block;
        font-size: calc($size * 0.7);
        font-weight: 500;
        /* line-height: 1; */
        margin-right: calc($size * 1.5);
        outline: num;
        white-space: nowrap;

        .um-radio__input {
            box-sizing: border-box;
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
                /* box-sizing: border-box; */
                display: inline-block;
                height: calc($size * 1.4);
                position: relative;
                width: calc($size * 1.4);

                .um-radio__inner__thumb {
                    background-image: linear-gradient(180deg, rgb(222, 222, 222), rgb(203, 203, 203));
                    border-radius: 100%;
                    box-shadow: 0 0 2px #5b5b5b inset;
                    content: "";
                    height: $size;
                    left: calc($size * 0.2);
                    position: absolute;
                    top: calc($size * 0.2);
                    /* transform: translate(-50%, -50%) scale(1); */
                    transition: transform .15s ease-in;
                    width: $size;
                }
            }

            .um-radio__original {
                display: none;
                z-index: -999;
            }
        }

        .um-radio__label {
            -webkit-text-stroke: 0.4px rgb(106, 87, 50);
            color: rgb(106, 87, 50);
            cursor: pointer;
            font-size: $size;
            font-weight: bold;
            line-height: calc($size * 1.4);
            padding-left: calc($size / 2);
            
            vertical-align: middle;
        }
    }

    // 选中的样式
    .um-radio.is-checked {
        .um-radio__input {
            .um-radio__inner {
                .um-radio__inner__thumb {
                    background-image: linear-gradient(180deg, rgb(176, 255, 66), rgb(82, 197, 86));
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
        .um-radio__label {
            cursor: not-allowed;
        }
    }
</style>