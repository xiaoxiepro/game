<template>
  <view class="token-box">
    <view class="token-select">
      <image src="@/static/imgs/coin-img.png" class="matic-img" />
      <text class="chin-text">MATIC</text>
    </view>
    <view class="address-box">
      <image src="@/static/imgs/address-img.png" class="address-img" />
      <text class="address-text">{{ textOmit(useRoot.address, 6, 6) }}</text>
    </view>
  </view>
</template>

<script setup>
import { useRootStore } from "@/store/Root";
import { textOmit } from "@/utils";

const useRoot = useRootStore();
</script>

<style lang="scss" scoped>
.token-box {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 32rpx;
  margin: auto;
  margin-top: 16rpx;
  .token-select {
    position: relative;
    width: 256rpx;
    height: 68rpx;
    background: linear-gradient(
      180deg,
      rgba(233, 241, 255, 0) 0%,
      rgba(39, 189, 246, 0.5) 55%,
      #52eaef 100%
    );
    border-radius: 16rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32rpx;
    font-weight: 400;
    color: #ffffff;
    .matic-img {
      width: 42rpx;
      height: 42rpx;
      margin-right: 8rpx;
    }
  }
  .address-box {
    width: 400rpx;
    height: 68rpx;
    background: linear-gradient(
      180deg,
      rgba(233, 241, 255, 0) 0%,
      rgba(39, 189, 246, 0.5) 55%,
      #52eaef 100%
    );
    border-radius: 16rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32rpx;
    font-weight: 400;
    color: #ffffff;
    .address-text {
      margin-left: 12rpx;
    }
    .address-img {
      width: 36rpx;
      height: 36rpx;
    }
  }
}
</style>
