<template>
    <view>
        <view class="show-box-bg wx-login-box">
            <view class="conten">
                <view class="titl">
                    {{ textmsg.title }}
                </view>
                <view class="text">
                    {{ textmsg.content }}
                </view>
                <view class="text" style="margin-bottom: 50rpx;">
                    {{ textmsg.contentTwo || '' }}
                </view>
                <view class="btn-box">
                    <view class="cancel" @tap="$emit('cancel')">
                        {{ textmsg.cancel }}
                    </view>
                    <view class="confirm" @tap="$emit('confirm',textmsg.type)">
                        {{ textmsg.confirm }}
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        props:['textmsg'],
        data() {
            return {
                
            }
        },
        methods:{
            operation(e){
                let type = e
                this.$emit('operation',type)
            },
        }
    }
</script>

<style scoped lang="scss">
    .wx-login-box {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 901;
        .conten {
            width: 78%;
            // height: 400upx;
            background-color: #2f2435;
            z-index: 1000;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            border-radius: 14upx;
            overflow: hidden;
            .titl {
                width: 90%;
                height: 110rpx;
                font-size: 40rpx;
                padding: 0 5%;
                color: #FFFFFF;
                text-align: center;
                line-height: 140rpx;
            }
            .text {
                width: 90%;
                font-size: 28rpx;
                color: #FFFFFF;
                padding: 0 5%;
                text-align: center;
            }
            .memberY {
                width: 90%;
                font-size: 28rpx;
                color: #FFCC00;
                padding: 0 5%;
                text-align: center;
            }
            .memberB {
                width: 90%;
                font-size: 28rpx;
                color: #007AFF;
                padding: 0 5%;
                text-align: center;
            }
            .btn-box {
                width: 100%;
                height: 90rpx;
                display: flex;
                border-top: 2rpx solid #969696;
                .cancel {
                    width: 50%;
                    height: 100%;
                    font-size: 40rpx;
                    color: #999;
                    text-align: center;
                    line-height: 89rpx;
                    border-right: 2rpx solid #969696;
                }
                .confirm {
                    width: 50%;
                    height: 100%;
                    font-size: 40rpx;
                    color: #ffcc00;
                    text-align: center;
                    line-height: 99rpx;
                }
            }
        }
        
    }
    
</style>