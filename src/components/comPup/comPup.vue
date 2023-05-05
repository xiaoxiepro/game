<template>
  <van-popup v-model:show="confirmStatus">
    <view class="max-box">
      <view class="pup-box">
        <image src="@/static/imgs/close-pup.png" class="close-img" />
        <view class="comtnet-box">
          <view class="title-text">参与</view>
          <view class="buy-text">请输入购买数量</view>
          <view class="edit-box">
            <image src="@/static/imgs/jian-img.png" class="img" />
            <text>1</text>
            <image src="@/static/imgs/jia-img.png" class="img" />
          </view>
          <view class="zf-text">需要支付</view>
          <view class="amount-box">
            <view class="amount-text">5788</view>
            <view class="unit-text">USDT</view>
          </view>
          <view class="fee-text">手续费：3％</view>
          <view class="btn">确认</view>
        </view>
      </view>
    </view>
  </van-popup>
</template>

<script setup>
import { ref } from "vue";
import usePupStatus from "@/hooks/usePupStatus";
// import { useRootStore } from "@/store/Root";
// const useRoot = useRootStore();
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const { confirmStatus } = usePupStatus();
const cancelPup = () => {
  confirmStatus.value = false;
};
const props = defineProps({});
const clickConfirm = () => {};
</script>

<style lang="scss" scoped>
.max-box {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .pup-box {
    position: relative;
    width: 684rpx;
    height: 622rpx;
    background: #ffffff;
    box-shadow: 0rpx 2rpx 12rpx 2rpx rgba(22, 105, 233, 0.16);
    border-radius: 24rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url("@/static/imgs/pup-bg.png") 0 0/100% 100%;
    .comtnet-box {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .title-text {
        font-size: 52rpx;
        font-weight: bold;
        color: #003aae;
        text-shadow: 0rpx 0rpx 2rpx rgba(255, 255, 255, 0.95);
      }
      .buy-text {
        font-size: 24rpx;
        font-weight: 400;
        color: #072f3d;
        margin-top: 30rpx;
      }
      .edit-box {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 64rpx;
        font-weight: 400;
        color: #1c1c1c;
        margin-top: 18rpx;
        margin-bottom: 30rpx;
        .img {
          width: 41rpx;
          height: 41rpx;
          margin: 0 38rpx;
        }
      }
      .amount-box {
        width: 476rpx;
        height: 72rpx;
        border-radius: 16rpx;
        border: 2rpx solid #c8f3ff;
        padding: 0 24rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 8rpx 0;
        .amount-text {
          font-size: 48rpx;
          font-weight: 400;
          color: #ffffff;
        }
        .unit-text {
          font-size: 32rpx;
          font-weight: 400;
          color: #072f3d;
        }
      }
      .zf-text,
      .fee-text {
        width: 100%;
        padding-left: 142rpx;
        font-size: 24rpx;
        font-weight: 400;
        color: #072f3d;
      }
      .btn {
        width: 238rpx;
        height: 78rpx;
        background: url("@/static/imgs/combtn-bg.png") 0 0/100% 100%;
        font-size: 36rpx;
        font-weight: 800;
        color: #ffffff;
        text-align: center;
        padding-top: 12rpx;
        margin-top: 38rpx;
      }
    }
    .close-img {
      position: absolute;
      right: -10rpx;
      top: -10rpx;
      width: 66rpx;
      height: 66rpx;
    }
  }
}
</style>
