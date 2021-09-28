<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
    <label class="um-component um-checkbox" 
    :class="{
        'is-checked': isChecked,
        'is-disabled': disabled,
        }"
    :style="{
        '--size': `${size}px`
    }"    
    >
        <span class="um-checkbox__input">
            <span class="um-checkbox__inner">
                <i class="um-icon-select"></i>
            </span>
            <input 
            type="checkbox" 
            class="um-checkbox__original" 
            :name="name"
            :value="label"
            v-model="model"
            :disabled="disabled">
        </span>
        <span class="um-checkbox__label">
            <slot></slot>
            <!-- 如果没有传值，就把label作为文本显示 -->
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>

<script>
    export default {
        name: 'um-checkbox',
        inject: {
            checkboxGroup: {
                default: ''
            }
        },
        props: {
            value: {
                type: Boolean,
                default: false
            },
            label: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            size: {
                type: Number,
                default: 20
            }
        },
        computed: {
            isGroup(){
                return !!this.checkboxGroup
            },
            model:{
                get() {
                    return this.isGroup ? this.checkboxGroup.value : this.value
                    
                },
                set(value){
                    this.isGroup ? this.checkboxGroup.$emit('input', value) : this.$emit('input', value)
                }
            },
            isChecked(){
                return this.isGroup ? this.model.includes(this.label) : this.model
            }
        },
        
    }
</script>

<style lang="scss">
    .um-checkbox {
        $size: var(--size) !global;

        color: #606266;
        cursor: pointer;
        display: inline-block;
        font-weight: 500;
        line-height: 1;
        margin-right: calc($size * 1.5);
        outline: num;
        position: relative;
        white-space: nowrap;

        .um-checkbox__input {
            

            .um-checkbox__inner {
                background-image: linear-gradient(to top,rgb(229, 229, 229),rgb(255, 255, 255));
                border: 1px solid #5b5b5b95;
                border-radius: 20%;
                box-shadow: 0px 2.5px 2px #3d3d3db5;
                box-sizing: border-box;
                color: rgb(168, 168, 168);
                display: inline-block;
                height: calc($size * 1.4);
                position: relative;
                -webkit-text-stroke: 2px rgb(168, 168, 168);
                vertical-align: middle;
                width: calc($size * 1.4);
                &:hover {
                    background-image: linear-gradient(to top,rgb(220, 220, 220),rgb(220, 220, 220));
                }
                i {
                    font-size: calc($size * 1.1);
                    font-weight: bold;
                    position: absolute;
                    top: calc($size / 5);
                    right: calc($size / 10);
                }
            }

            .um-checkbox__original {
                bottom: 0;
                left: 0;
                margin: 0;
                opacity: 0;
                outline: num;
                position: absolute;
                right: 0;
                top: 0;
                z-index: -1;
            }
        }

        .um-checkbox__label {
            -webkit-text-stroke: 0.4px rgb(106, 87, 50);
            color: rgb(106, 87, 50);
            font-size: $size;
            font-weight: bold;
            line-height: $size;
            padding-left: calc($size * 0.25 + 15px);
            vertical-align: middle;
        }
    }

    // 选中的样式
    .um-checkbox.is-checked {
        .um-checkbox__inner {
            i{
                color: rgb(176, 255, 116);
                mask: linear-gradient(to top,rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.2));
                -webkit-text-stroke: 2px rgb(84, 193, 0);
            }
        }
    }
    .um-checkbox.is-disabled {
        cursor: not-allowed;
        .um-checkbox__inner {
            background-image: linear-gradient(to top,rgb(220, 220, 220),rgb(220, 220, 220));
        }
    }
</style>