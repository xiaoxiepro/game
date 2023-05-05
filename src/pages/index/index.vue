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
      <view>
        <view class="data-row">
          <view class="key-text">总质押量</view>
          <view class="value-text">292917.15 DEV</view>
        </view>
        <view class="data-row">
          <view class="key-text">有效质押人数</view>
          <view class="value-text">6523929</view>
        </view>
        <view class="data-row">
          <view class="key-text">累计参与人数</view>
          <view class="value-text">834</view>
        </view>
        <view class="data-row">
          <view class="key-text">产生奖励</view>
          <view class="value-text">56417.15 DEV</view>
        </view>
      </view>
      <view class="line"></view>
      <view class="input-box">
        <input
          class="input"
          type="number"
          placeholder="请输入数量"
          placeholder-class="placeholder-class"
        />
        <view class="all-box">全部</view>
      </view>
      <view class="btn-list">
        <view class="left-btn">出售</view>
        <view class="right-btn">参与</view>
      </view>
      <view class="tip-box">
        <image class="img" src="@/static/imgs/jb-img.png" />
        <text>要求金额 > 100USDT</text>
      </view>
    </view>
    <view class="team-box"></view>
  </view>
</template>

<script></script>

<style lang="scss" scoped>
.index-page {
  width: 100%;
  min-height: 100vh;
  background: url("@/static/imgs/page-bg.png") 0 0/100% 100%;
  padding-bottom: 144rpx;
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
      padding-left: 12rpx;
      .all-power-img {
        width: 36rpx;
        height: 37rpx;
        margin-right: 10rpx;
      }
    }
    .data-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 35rpx;
      padding: 0 12rpx;
      &:first-child {
        margin-top: 35rpx;
      }
      .key-text {
        font-size: 28rpx;
        font-weight: 400;
        color: #072f3d;
      }
      .value-text {
        font-size: 32rpx;
        font-weight: 400;
        color: #ffffff;
      }
    }
    .line {
      width: 658rpx;
      height: 2px;
      background: #80d8f1;
      margin: auto;
    }
    .input-box {
      width: 606rpx;
      height: 76rpx;
      background: #eeeeee;
      border-radius: 8rpx;
      margin: auto;
      margin-top: 36rpx;
      display: flex;
      align-items: center;
      padding: 24rpx;
      .input {
        font-size: 32rpx;
        font-weight: 400;
        color: #216982;
        flex: 1;
        height: 100%;
      }
      .placeholder-class {
        font-size: 32rpx;
        font-weight: 400;
        color: #216982;
      }
      .all-box {
        font-size: 24rpx;
        font-weight: 400;
        color: #f65959;
        border-left: 2rpx solid #e5e5e5;
        height: 32rpx;
        line-height: 32rpx;
        padding-left: 12rpx;
      }
    }
    .btn-list {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 40rpx;
      .left-btn {
        text-align: center;
        padding-top: 12rpx;
        background: url("@/static/imgs/left-btn.png") 0 0/100% 100%;
        font-size: 40rpx;
        font-weight: 800;
        color: #ffffff;
        margin-right: 30rpx;
        width: 272rpx;
        height: 90rpx;
      }
      .right-btn {
        text-align: center;
        padding-top: 12rpx;
        background: url("@/static/imgs/right-btn.png") 0 0/100% 100%;
        font-size: 40rpx;
        font-weight: 800;
        color: #ffffff;
        width: 272rpx;
        height: 90rpx;
      }
    }
    .tip-box {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 22rpx;
      font-size: 24rpx;
      font-weight: 400;
      color: #072f3d;
      .img {
        width: 29rpx;
        height: 29rpx;
        margin-right: 6rpx;
      }
    }
  }
  .team-box {
    width: 716rpx;
    height: 1040rpx;
    margin: auto;
    margin-top: 44rpx;
    background: url("@/static/imgs/team-bg.png") 0 0/100% 100%;
  }
}
</style>
