<template>
  <view class="index-page">
    <Header />
    <token-box />
    <view class="stake-box">
      <view class="title-box">挖矿</view>
      <view class="all-power">
        <image class="all-power-img" src="@/static/imgs/all-power-img.png" />
        <view class="all-power-data">全网预售算力：10000 DEV</view>
      </view>
      <view class="all-power">
        <image class="all-power-img" src="@/static/imgs/blackhole-img.png" />
        <view class="all-power-data">黑洞地址持有代币：10000 DEV</view>
      </view>
      <view class="all-power">
        <image class="all-power-img" src="@/static/imgs/miningpool-img.png" />
        <view class="all-power-data">矿池数据</view>
      </view>
    </view>
  </view>
</template>

<script></script>

<style lang="scss" scoped>
.index-page {
  width: 100%;
  min-height: 100vh;
  background: url("@/static/imgs/page-bg.png") 0 0/100% 100%;
  .stake-box {
    position: relative;
    width: 716rpx;
    height: 994rpx;
    background: url("@/static/imgs/stake-bg.png") 0 0/100% 100%;
    margin: auto;
    margin-top: 86rpx;
    padding: 0 30rpx;
    padding-top: 100rpx;
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
    .all-power {
      display: flex;
      align-items: center;
      font-size: 28rpx;
      font-weight: 400;
      color: #ffffff;
      margin-top: 35rpx;
      .all-power-img {
        width: 36rpx;
        height: 37rpx;
        margin-right: 10rpx;
      }
    }
  }
}
</style>
