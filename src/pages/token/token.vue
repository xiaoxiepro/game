<template>
  <view class="token-page">
    <Header />
    <token-box />
    <view class="content">
      <view class="nft-box">
        <view class="title-box">权益NFT令牌</view>
        <image src="@/static/imgs/nft-img.png" class="img" />
        <text>和GameDefi DEV一起开始您的数字资产之旅</text>
      </view>
      <view class="my-nft-box">
        <veiw>
          <view class="data-row">
            <text class="key-text">我持有的NFT令牌</text>
            <text class="value-text">20</text>
          </view>
          <view class="data-row">
            <text class="key-text">当前权益NFT令牌价格：</text>
            <text class="value-text">￥100</text>
          </view>
          <view class="data-row">
            <text class="key-text">总发行量：</text>
            <text class="value-text">199</text>
          </view>
        </veiw>
        <view class="btn-list">
          <view class="left-btn">出售</view>
          <view class="right-btn">购买</view>
        </view>
      </view>
    </view>
    <foot />
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.token-page {
  width: 100%;
  min-height: 100vh;
  background: url("@/static/imgs/page-bg.png") 0 0/100% 100%;
  padding-bottom: 144rpx;
  .nft-box {
    position: relative;
    width: 716rpx;
    height: 722rpx;
    background: url("@/static/imgs/nft-bg.png") 0 0/100% 100%;
    margin: auto;
    margin-top: 86rpx;
    padding: 0 30rpx;
    padding-top: 110rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 28rpx;
    font-weight: 400;
    color: #072f3d;
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
      background: url("@/static/imgs/nft-title-bg.png") 0 0/100% 100%;
    }
    .img {
      width: 448rpx;
      height: 492rpx;
      margin-bottom: 28rpx;
    }
  }
  .my-nft-box {
    position: relative;
    width: 716rpx;
    height: 478rpx;
    background: url("@/static/imgs/my-nft-bg.png") 0 0/100% 100%;
    margin: auto;
    margin-top: 40rpx;
    padding: 10rpx 50rpx;
    padding-bottom: 0;
    .data-row {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 40rpx;
      &:not(:last-child) {
        padding-bottom: 36rpx;
        border-bottom: 1rpx solid #80d8f1;
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
  }
}
</style>
