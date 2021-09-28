<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
    <div class="um-component um-input"
    :style="{
        '--cumstomheight': height
    }">
        <input class="um-input__inner" :value="value"
            :class="`um-input__padding__${paddingLength()} ${disabled?'um-input-disabled':''}`"
            :type="type==='text'?'text':(showPasswordVisiable?'text':'password')" 
            :placeholder="placeholder"
            :disabled="disabled" 
            :style="{
                '--pTextAlign': placeholderAlign,
                'text-align': mainTextAlign
            }" 
            @input="handleInput">
        <span class="um-input__icon" v-if="clearable || showPassword">
            <i class="um-icon-browse" v-if="type=='password' && showPassword && value" @click="showPasswordMethod"></i>
            <i class="um-icon-error" v-if="clearable && value" @click="clearText"></i>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'um-input',
        data() {
            return {
                showPasswordVisiable: false
            }
        },
        props: {
            value: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            },
            height: {
                type: String,
                default: '40px'
            },
            name: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            clearable: {
                type: Boolean,
                default: false
            },
            showPassword: {
                type: Boolean,
                default: false
            },
            placeholderAlign: {
                type: String,
                default: 'left'
            },
            mainTextAlign: {
                type: String,
                default: 'left'
            },

        },
        methods: {
            handleInput(e) {
                this.$emit('input', e.target.value);
            },
            clearText() {
                this.$emit('input', '')
            },
            showPasswordMethod() {
                this.showPasswordVisiable = !this.showPasswordVisiable
            },
            paddingLength() {
                return ((this.type=='password' && this.showPassword && this.value) && (this.clearable && this.value)) ? 2 
                : (!((this.type=='password' && this.showPassword && this.value) || (this.clearable && this.value)) ? 0 
                : 1)

            }
        }

    }
</script>

<style lang="scss">
    .um-input {
        display: inline-block;
        position: relative;
        width: 100%;
        $myheight: var(--cumstomheight);
        &__inner {
            -webkit-text-stroke: 0.3px #4f3700;
            -webkit-box-sizing: border-box;
            color: #4f3700;
            -moz-box-sizing: border-box;
            border: 1.5px solid #6a5732;
            border-radius: 4.5px;
            box-sizing: border-box;
            font-size: calc( $myheight * 0.45 );
            font-weight: bold;
            height: $myheight;
            line-height: $myheight;
            overflow: hidden;
            padding-left: 10px;
            padding-right: 10px;
            width: 100%;

            &:focus {
                border-color: #6a5732;
                outline: none;
            }

            &::placeholder {
                -webkit-text-stroke: 0px #4f370044;
                color: #4f370044;
                text-align: var(--pTextAlign);
            }

            &::selection {
                background-color: #89f1ff65;
                color: #4f3700;
            }
        }

        &__icon {
            line-height: $myheight;
            position: absolute;
            right: 10px;
            top: 0;
            z-index: 900;

            .el-input__inner {
                padding-right: 45px;
            }

            i {
                color: #6a5732;
                cursor: pointer;
                font-size: calc( $myheight * 0.4 );
                &:hover {
                    color: #6a5732;
                }
            }
        }

        &__icon__position {
            visibility: hidden;
        }

        &__padding__1 {
            padding-right: calc( $myheight * 0.65 );
        }

        &__padding__2 {
            padding-right: calc( $myheight * 1 );
        }
    }

    .um-input-disabled {
        background-color: #c8ac6a;
        cursor: not-allowed;
    }
</style>