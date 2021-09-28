<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
    <transition name="dialog-fade__weapper" mode="out-in">
        <div class="um-dialog__wrapper" v-show="visible" @click.self="handleClose">
            <!-- <div class="um-dialog__mask"></div> -->
            <div class="um-component um-dialog" :style="{width: width, marginTop: top}">
                <slot name="title">
                    <div class="um-dialog__header um-dialog__title">
                            <span class="um-dialog__title">{{title}}</span>
                    </div>
                </slot>
                <slot name="title">
                    <div class="um-dialog__header__position um-dialog__title">
                            <span class="um-dialog__title">{{title}}</span>
                    </div>
                </slot>
                <div :class="`um-dialog__body uma-dialog__body-grey`" :style="`text-align: ${align}`">
                    <slot></slot>
                </div>
                <div class="um-dialog__footer">
                    <slot name="footer">
                        <span class="um-dialog__footer__button">
                            <um-button @click="handleClose">取消</um-button>
                            <um-button type="green">确定</um-button>
                        </span>
                    </slot>
                </div>
                <div class="um-dialog__footer__position">
                    <slot name="footer">
                        <span class="um-dialog__footer__button">
                            <um-button>取消</um-button>
                            <um-button type="green">确定</um-button>
                        </span>
                    </slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'um-dialog',
        props: {
            title: {
                type: String,
                default: 'title'
            },
            align: {
                type: String,
                default: 'left'
            },
            width: {
                type: String,
                default: '1000px'
            },
            top: {
                type: String,
                default: '15vh'
            },
            visible: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            handleClose() {
                this.$emit('update:visible', false)
            }
        }
    }
</script>

<style lang="scss">
.um-dialog__wrapper {
	backdrop-filter: blur(8px);
	background-color: rgba(85, 85, 85, 0.3);
	bottom: 0;
	left: 0;
	margin: 0;
	overflow: auto;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 2001;
}
.um-dialog {
	background-color: rgb(245, 245, 245);
	border-radius: 20px;
	box-shadow: 0px 0px 13px 10px rgba(60, 60, 60, 0.3);
	margin: 15vh auto 50px;
	padding: 0 8px;
	position: relative;
	text-align: center;
	.um-dialog__header,
    .um-dialog__header__position {
		-webkit-text-stroke: 0.5px rgb(241, 241, 241);
		background-color: #57cd24;
		background-image: url('../assets/images/um_title_bg.png');
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 20px 20px 0 0;
		color: rgb(241, 241, 241);
        font-size: 35px;
        font-weight: bold;
		left: 0;
		right: 0;
		top: 0;
	}
	.um-dialog__header__position {
		position: relative;
		visibility: hidden;
	}
	.um-dialog__header {
		position: absolute;
	}
    .um-dialog__title {
        padding: 10px;
    }


	.um-dialog__body {
		padding: 5px 15px;
		position: relative;
		top: 35px;
	}
	.uma-dialog__body-grey {
		background-color: rgb(238, 238, 238);
		border-radius: 10px;
	}
	.um-dialog__footer,
    .um-dialog__footer__position {
		bottom: 0;
		left: 0;
		margin-top: 80px;
		right: 0;
		.um-dialog__footer__button {
			margin: 20px 0;
		}
	}
	.um-dialog__footer {
		position: absolute;
	}
	.um-dialog__footer__position {
		position: relative;
		visibility: hidden;
	}
}
.dialog-fade__weapper-enter-active {
	animation: fadeIn;
	animation-duration: 0.3s;
}
.dialog-fade__weapper-leave-active {
	animation: fadeOut;
	animation-duration: 0.3s;
}

</style>