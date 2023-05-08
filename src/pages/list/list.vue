<template>
  <view class="list-page">
    <Header status />
    <view class="content-box">
      <view class="list-box">
        <view class="title-box">资金记录</view>
        <scroll-view class="scroll-box" scroll-y>
          <view class="data-row">
            <view class="info-box">
              <text class="info-text">提现</text>
              <text class="time-text">2022-06-14 11:30:20</text>
            </view>
            <text class="amount-text">-100 BNB</text>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { useRootStore } from "@/store/Root";
import { useI18n } from "vue-i18n";
const useRoot = useRootStore();
const { t } = useI18n();
</script>

<style lang="scss" scoped>
.list-page {
  width: 100%;
  min-height: 100vh;
  background: url("@/static/imgs/page-bg.png") 0 0/100% 100%;

  .content-box {
    flex: 1;
    height: 0;
    width: 100%;
    padding: 52rpx 32rpx;
    height: calc(100vh - 108rpx);
    .list-box {
      position: relative;
      width: 100%;
      height: 100%;
      background: url("@/static/imgs/list-bg.png") 0 0/100% 100%;
      padding: 26rpx;
      padding-top: 124rpx;
      .title-box {
        position: absolute;
        left: 50%;
        top: -46rpx;
        transform: translateX(-50%);
        width: 578rpx;
        height: 146rpx;
        font-size: 52rpx;
        font-weight: 800;
        color: #ffffff;
        text-align: center;
        background: url("@/static/imgs/stake-title-bg.png") 0 0/100% 100%;
      }
      .scroll-box {
        height: 100%;
        width: 100%;
        .data-row {
          width: 100%;
          height: 168rpx;
          background: #eee;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 46rpx;
          &:not(:last-child) {
            margin-bottom: 8rpx;
          }
          .info-box {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .info-text {
              font-size: 32rpx;
              font-weight: bold;
              color: #333333;
              margin-bottom: 16rpx;
            }
            .time-text {
              font-size: 24rpx;
              font-weight: 400;
              color: #333333;
            }
          }
          .amount-text {
            font-size: 32rpx;
            font-weight: bold;
            color: #f65959;
          }
        }
      }
    }
  }
}
</style>
