<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
 * @Date: 2021-10-05 12:22:33
 * @LastEditTime: 2021-10-05 14:31:34
-->
<template>
    <div class="um-component um-slider" ref="slider"
        :class="{
            'um-slider-disabled': disabled
        }"
        :style="{
            '--size': size + 'px'
        }">
        <div class="um-slider__inner" :style="{width}"></div>
        <div class="um-slider__thunk" ref="trunk" :style="{left}">
            <div class="um-slider__thumb"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'um-slider',
    props:{
        max: {
            type: Number,
            default: 30
        },
        min: {
            type: Number,
            default: 0
        },
        value: {
            type: Number,
            default: 0
        },
        step: {
            type: Number,
            default: 1
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
    data(){
        return{
            slider: null,
            thunk: null,
            value_: this.value,
        }
    },
    //渲染到页面的时候
    mounted () {
        this.slider = this.$refs.slider
        this.thunk = this.$refs.trunk
        this.thunk.onmousedown =  (e) => {
            if(this.slider.className.match(/disabled/g)) {
                return
            }
            let width = parseInt(this.width)
            let disX = e.clientX
            // console.log('disX', disX)
            document.onmousemove = (e) => {
                let newWidth = e.clientX - disX + width
                let scale = newWidth / this.slider.offsetWidth
                this.value_ = Math.ceil(parseInt(((this.max - this.min) * scale + this.min)/this.step) * this.step)
                // 拖动时超出范围时的操作
                this.value_ = Math.max(this.value_,this.min)
                this.value_ = Math.min(this.value_,this.max)
                this.$emit('input', this.value_)
            }
            document.onmouseup = function(){
                document.onmousemove = document.onmouseup = null
            }
            return false
        }
    },
    computed: {
        scale(){
            return (this.value_ - this.min) / (this.max - this.min)
        },
        width(){
            if(this.slider){
                return this.slider.offsetWidth * this.scale + 'px'
            }else{
                return 0 + 'px'
            }
        },
        left(){
            if(this.slider){
                return `${this.slider.offsetWidth * this.scale -  this.thunk.offsetWidth/2}px`
            }else{
                return 0 + 'px'
            }
        },
    },
    watch: {
        value(val) {
            this.value_ = val
        }
    }
}
</script>
<style lang="scss">
.um-slider {
    $size: var(--size) !global;
    position:relative;
    cursor: pointer;
    margin:$size 0;
    width:100%;
    height:calc($size / 2);
    background:#6a6a6a;
    border-radius:calc($size / 4);
    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.6);
    .um-slider__inner{
        box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.6);
        position:absolute;
        left:0;
        top:0;
        height:calc($size / 2);
        border-radius:calc($size / 4);
        background:#b5ff18;
    }
    .um-slider__thunk{
        position:absolute;
        top: 0;
        width:$size;
        height:$size;
    }
    .um-slider__thumb{
        width:$size;
        height:$size;
        position: absolute;
        top:calc($size / 4 * (-1) - 0.5px);
        border: 0.1px solid #616161;
        border-radius: 100% 100%;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.6);
        background-image: url('../assets/images/umbtn_circle_bg.png'), linear-gradient(180deg, rgb(255, 255, 255), rgb(255, 255, 255));
        background-repeat: no-repeat;
        background-size: 100% 100%;
        &:hover {
            background-image: url('../assets/images/umbtn_circle_bg.png'), linear-gradient(180deg, rgb(230, 230, 230), rgb(230, 230, 230));
        }
    }
}

.um-slider-disabled {
        background-color: rgba(79, 55, 0, 0.15);
        cursor: not-allowed;
        background:#595959;
        /* &::-webkit-slider-thumb {
            background-image: url('../assets/images/umbtn_circle_bg.png'), linear-gradient(180deg, rgb(175, 175, 175), rgb(175, 175, 175));
            cursor: not-allowed;
        } */
        .um-slider__inner {
            background: #a4dd07;
        }
        .um-slider__thumb {
            background-image: url('../assets/images/umbtn_circle_bg.png'), linear-gradient(180deg, rgb(175, 175, 175), rgb(175, 175, 175));
            &:hover {
                background-image: url('../assets/images/umbtn_circle_bg.png'), linear-gradient(180deg, rgb(175, 175, 175), rgb(175, 175, 175));
            }
        }
        

        /* &::-webkit-slider-runnable-track {
            background-image: var(--slider-inner-linear-gradient-disabled);
        } */
    }
</style>