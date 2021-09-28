<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
    <div class="um-component um-switch" 
    :class="{'is-checked':value}" 
    @click="handleClick"
    :style="{
        '--customwidth': width,
        '--customheight': height
        }">
        <span class="um-switch__core" ref="core" >
            <span class="um-switch__button"></span>
            <span class="um-switch__text" v-if="showText">
                {{value?'ON':'OFF'}}
            </span>
        </span>
        <input type="checkbox" class="um-switch__input" :name="name" ref="input">
    </div>
</template>

<script>
  export default {
    name: 'um-switch',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: '120px'
      },
      height: {
        type: String,
        default: '40px'
      },
      showText: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleClick() {
        this.$emit('input', !this.value)
        this.$refs.input.checked = this.value
      }
    },
    watch: {
      'value'(e) {
        if (this.activeColor || this.inactiveColor) {
          var color = !e ? this.activeColor : this.inactiveColor
          this.$refs.core.style.borderColor = color
          this.$refs.core.style.backgroundColor = color
        }
      }
    },
  }
</script>

<style lang="scss">
  .um-switch {
    $mywidth: var(--customwidth) !global;
    $myheight: var(--customheight) !global;
    align-items: center;
    display: inline-block;
    font-size: calc($myheight * 0.7);
    line-height: $myheight;
    position: relative;
    vertical-align: middle;
    .um-switch__core {
      background: #f1f1f1;
      background-image: url('../assets/images/umbtn_down_bg.png');
      border: 0.1px solid #616161;
      border-radius: calc($myheight / 2);
      box-shadow: 0 0 2px #5b5b5b inset;
      box-sizing: border-box;
      cursor: pointer;
      display: inline-block;
      height: $myheight;
      margin: 0;
      outline: num;
      position: relative;
      transition: border-color .3s, background-color .3s;
      vertical-align: middle;
      width: $mywidth;

      .um-switch__button {
        border: 0.1px solid #616161;
        background-image: url('../assets/images/umbtn_circle_bg.png'), linear-gradient(180deg, rgb(255, 255, 255),rgb(255, 255, 255));
        background-repeat: no-repeat;
        background-size: 100% 100%;
        border-radius: 100%;
        box-shadow: 0px 1px 1px rgb(99, 99, 99);
        height: calc($myheight * 1.1);
        left: calc(-1 * $myheight * 0.1);
        position: absolute;
        top: calc(-1 * $myheight * 0.1);
        transition: all .3s;
        width: calc($myheight * 1.1);
        z-index: 5;
      }
    }
  }

  .um-switch__text {
    color: rgb(106, 87, 50);
    font-weight: bold;
    letter-spacing: 0.5px;
    position: absolute;
    right: 16px;
    text-shadow: 0.2px 0.2px 1px rgb(60, 60, 60);
    -webkit-text-stroke: 0.4px rgb(106, 87, 50);
    top: 0px;
    transition: all .3s;
    user-select: none;
    z-index: 4;
    /* animation: fadeText 0.3s; */
  }

  // 选中样式
  .is-checked {
    .um-switch__core {
      background-color: #82ff58;
      /* border-color: #82ff58; */

      .um-switch__button {
        transform: translateX(calc($mywidth - 34px));
      }

      .um-switch__text {
        color: #fff;
        letter-spacing: 2.5px;
        -webkit-text-stroke: 0px #fff;
        transform: translateX(calc(92px - $mywidth));
      }
    }
  }

  // 隐藏input标签
  .um-switch__input {
    height: 0;
    margin: 0;
    opacity: 0;
    position: absolute;
    width: 0;
  }
</style>