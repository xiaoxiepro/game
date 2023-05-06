<template>
  <view class="my-page">
    <Header />
    <token-box />
    <view class="content-box">
      <view class="user-box">
        <view class="title-box">
          <image src="@/static/imgs/user-img.png" class="img" />
          <text>我的账号</text>
        </view>
        <view class="info-row">
          <text class="key-text">钱包余额</text>
          <text class="val-text">917.15 DEV</text>
        </view>
        <view class="info-row">
          <text class="key-text">系统余额</text>
          <text class="val-text">917.15 DEV</text>
        </view>
        <view class="his-btn">资金记录</view>
      </view>
      <view class="link-box">
        <view class="title-box">
          <image src="@/static/imgs/link-img.png" class="img" />
          <text>邀请链接</text>
        </view>
        <view class="link-box">
          <view class="link-url"> https://v8.webdexpool.online </view>
          <view class="copy-box copy-img">
            <image src="@/static/imgs/copy-img.png" class="img" />
            <text>复制</text>
          </view>
        </view>
        <view class="invite-ms">
          发送您的邀请链接，好友通过您的链接加入节点，您将获得丰厚的MATIC奖励
        </view>
        <view class="gofj-box">
          <view class="left-box">
            <view class="top-text">Telegram联系方式</view>
            <view class="bom-text">https://vvv.Telegram.online</view>
          </view>
          <image src="@/static/imgs/telegram.png" class="right-img" />
        </view>
      </view>
      <view class="tg-box">
        <view class="title-box">
          <image src="@/static/imgs/tg-img.png" class="img" />
          <text>推广列表</text>
        </view>
        <view class="tg-body">
          <view class="reward-head">
            <view class="reward-head-item">钱包地址</view>
            <view class="reward-head-item">推荐人数</view>
            <view class="reward-head-item">参与数量</view>
          </view>
          <view class="reward-body">
            <scroll-view class="scroll-box" scroll-y>
              <template v-if="true">
                <view
                  class="reward-body-row"
                  v-for="(item, index) in 20"
                  :key="index"
                >
                  <view class="reward-body-item">
                    <text class="address-text"> 0x6dsd***1w2b34 </text>
                  </view>
                  <view class="reward-body-item"> 100 </view>
                  <view class="reward-body-item"> 100.00 DEV </view>
                </view>
              </template>
              <view class="no-data" v-else>暂无数据</view>
            </scroll-view>
          </view>
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
.my-page {
  width: 100%;
  min-height: 100vh;
  background: url("@/static/imgs/page-bg.png") 0 0/100% 100%;
  padding-bottom: 144rpx;
  .user-box {
    position: relative;
    width: 686rpx;
    height: 430rpx;
    background: url("@/static/imgs/user-bg.png") 0 0/100% 100%;
    margin: auto;
    margin-top: 36rpx;
    padding: 0 40rpx;
    padding-top: 56rpx;
    .title-box {
      display: flex;
      align-items: center;
      font-size: 28rpx;
      font-weight: 400;
      color: #ffffff;
      .img {
        width: 45rpx;
        height: 48rpx;
        margin-right: 14rpx;
      }
    }
    .info-row {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 40rpx;
      .key-text {
        font-size: 28rpx;
        font-weight: 400;
        color: #072f3d;
      }
      .val-text {
        font-size: 32rpx;
        font-weight: 400;
        color: #ffffff;
      }
    }
    .his-btn {
      text-align: center;
      padding-top: 12rpx;
      background: url("@/static/imgs/left-btn.png") 0 0/100% 100%;
      font-size: 40rpx;
      font-weight: 800;
      color: #ffffff;
      width: 272rpx;
      height: 90rpx;
      margin: auto;
      margin-top: 50rpx;
    }
  }
  .link-box {
    width: 686rpx;
    background: #ffffff;
    box-shadow: 0px 18rpx 12rpx 2rpx rgba(103, 68, 226, 0.13);
    border-radius: 32prx;
    margin: auto;
    margin-top: 20rpx;
    padding: 42rpx 40rpx;
    background: url("@/static/imgs/link-bg.png") 0 0/100% 100%;
    .title-box {
      display: flex;
      align-items: center;
      font-size: 28rpx;
      font-weight: 400;
      color: #ffffff;
      .img {
        width: 47rpx;
        height: 48rpx;
        margin-right: 12rpx;
      }
    }
    .link-box {
      width: 606rpx;
      height: 76rpx;
      background: rgba($color: #eee, $alpha: 0.5);
      border-radius: 8rpx;
      display: flex;
      align-items: center;
      padding: 0 24rpx;
      margin-top: 38rpx;
      .link-url {
        flex: 1;
        font-size: 32rpx;
        font-weight: 400;
        color: #333333;
        overflow: hidden; //超出的文本隐藏
        text-overflow: ellipsis; //溢出用省略号显示
        white-space: nowrap; //溢出不换行
      }
      .copy-box {
        display: flex;
        align-items: center;
        font-size: 24rpx;
        color: #072f3d;
        margin-left: 32rpx;
        .img {
          width: 28rpx;
          height: 28rpx;
          margin-right: 8rpx;
        }
      }
    }
    .invite-ms {
      margin-top: 24rpx;
      font-size: 28rpx;
      font-weight: 400;
      color: #072f3d;
      line-height: 42rpx;
      padding-bottom: 24rpx;
      border-bottom: 1rpx solid #80d8f1;
    }
    .gofj-box {
      width: 606rpx;
      height: 116rpx;
      background: linear-gradient(
        180deg,
        rgba(233, 241, 255, 0) 0%,
        rgba(39, 189, 246, 0.5) 55%,
        #52eaef 100%
      );
      border-radius: 16rpx;
      margin-top: 24rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 24rpx;
      .left-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        margin-right: 20rpx;
        overflow: hidden; //超出的文本隐藏
        text-overflow: ellipsis; //溢出用省略号显示
        white-space: nowrap; //溢出不换行
        .top-text {
          font-size: 28rpx;
          font-weight: 400;
          color: #ffffff;
          margin-bottom: 16rpx;
        }
        .bom-text {
          font-size: 28rpx;
          color: #eeeeee;
        }
      }
      .right-img {
        width: 72rpx;
        height: 72rpx;
      }
    }
  }
  .tg-box {
    width: 686rpx;
    height: 912rpx;
    background: #ffffff;
    box-shadow: 0px 18rpx 12rpx 2rpx rgba(103, 68, 226, 0.13);
    border-radius: 32rpx;
    margin: auto;
    margin-top: 32rpx;
    padding: 38rpx 40rpx;
    background: url("@/static/imgs/tg-bg.png") 0 0/100% 100%;
    .title-box {
      display: flex;
      align-items: center;
      font-size: 28rpx;
      color: #333333;
      .img {
        width: 36rpx;
        height: 43rpx;
        margin-right: 12rpx;
      }
    }
    .tg-body {
      padding-top: 34rpx;
      .reward-head {
        display: grid;
        grid-template-columns: 40% 20% 40%;
        margin-bottom: 28rpx;
        padding: 5rpx;
        .reward-head-item {
          font-size: 28rpx;
          color: #333333;
          text-align: center;
          &:first-child {
            text-align: left;
          }
          &:last-child {
            text-align: right;
          }
        }
      }
      .reward-body {
        height: 700rpx;
        .scroll-box {
          height: 100%;
          .reward-body-row {
            display: grid;
            grid-template-columns: 40% 20% 40%;
            margin-bottom: 32rpx;
            &:last-child {
              margin-bottom: 0;
            }

            .reward-body-item {
              font-size: 24rpx;
              color: #333333;
              text-align: center;
              .address-text {
                font-size: 24rpx;
                color: #999999;
              }
              &:first-child {
                text-align: left;
              }
              &:last-child {
                text-align: right;
              }
            }
          }
        }
      }
    }
  }
}
</style>
