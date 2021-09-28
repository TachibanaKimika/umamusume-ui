<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
 * @Date: 2021-09-17 13:58:59
 * @LastEditTime: 2021-09-27 14:24:28
-->
<template>
    <div id="app">
        <div class="area-bg">
            <div class="particle">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="menu">
            <um-menu route>
                <um-menu-item index="/">主页</um-menu-item>
                <um-menu-item index="/quickstart">快速开始</um-menu-item>
                <um-menu-item index="/component">组件</um-menu-item>
                <um-menu-item index="/about">关于</um-menu-item>
            </um-menu>
        </div>
        <div class="view">
            <router-view />
        </div>
    </div>
</template>

<style lang="scss">
    body {
        margin: 0;
        padding: 0;
    }

    #app {
        margin: 0;
        padding: 0;
    }

    .menu {
        background-color: white
    }

    .area-bg {
        $amount: 15;
        $animationDuration: 6s;
        $particleSize: 6vmin;

        position: fixed;
        top: 0;
        z-index: -1;
        .particle {
            height: 100vh;
            width: 100vw;
        }
        .particle span {
            $backgroundImg: (#4dfff6, #b8ff2b);
            animation-duration: $animationDuration;
            animation-iteration-count: infinite;
            animation-name: move;
            animation-timing-function: linear;
            backface-visibility: hidden;
            height: $particleSize;
            position: absolute;
            width: $particleSize;
            @for $i from 1 through $amount {
                &:nth-child(#{$i}) {
                    background-color: nth($backgroundImg, random(length($backgroundImg)));
                    top: random(100) * 1%;
                    left: random(100) * 1%;
                    animation-duration: (random($animationDuration * 10) / 10) * 1s + 10s;
                    animation-delay: random(($animationDuration + 3s) * 10) / 10 * -1s;
                    transform-origin: (random(50) - 25) * 1vw (random(50) - 25) * 1vh;
                    $blurRadius: (random() + 0) * $particleSize * 0;
                    $x: if(random() > 0.5, -1, 1);
                }
            }
        }
        
        @keyframes move {
            100% {
                transform: translate3d(0, 0, 1px) rotate(360deg);
            }
        }
    }
</style>