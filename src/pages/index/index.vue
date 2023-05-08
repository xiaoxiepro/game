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
    <view class="team-box">
      <view class="team-title-box">
        <image class="img" src="@/static/imgs/team-img.png" />
        <text>团队总业绩</text>
      </view>
      <view class="team-income">
        <view class="key-box">
          <image class="img" src="@/static/imgs/team-income-img.png" />
          团队收益
        </view>
        <text class="income-text">12321344 DEV</text>
      </view>
      <view class="tab-box">
        <view class="tab-list">
          <view class="tab-item active">大区</view>
          <view class="tab-item">小区</view>
        </view>
      </view>
      <view class="head-box">
        <view class="head-item">用户ID</view>
        <view class="head-item">关系</view>
        <view class="head-item">收益</view>
      </view>
      <view class="body-box">
        <scroll-view class="scroll-box" scroll-y>
          <view class="body-row" v-for="i in 20" :key="i">
            <view class="body-item">0x6dsd***1w2b</view>
            <view class="body-item">间推</view>
            <view class="body-item amount">2927.15 DEV</view>
          </view>
        </scroll-view>
      </view>
    </view>
    <view class="help-box">
      <view class="help-center-title">
        <image src="@/static/imgs/help-img.png" class="img" />
        <text>帮助中心</text>
      </view>
      <view class="help-list" v-if="useRoot.helpList.length">
        <van-collapse v-model="activeNames">
          <van-collapse-item
            class="help-item"
            v-for="(item, index) in useRoot.helpList.length / 2"
            :key="index"
            :title="useRoot.helpList[2 * index]"
            :name="item"
          >
            {{ useRoot.helpList[2 * index + 1] }}
          </van-collapse-item>
        </van-collapse>
      </view>
    </view>
    <foot :selectIndex="0" />
    <com-pup />
  </view>
</template>

<script setup>
import { ref } from "vue";
import { textOmit } from "@/utils";
import usePupStatus from "@/hooks/usePupStatus";
import { useRootStore } from "@/store/Root";
import { useI18n } from "vue-i18n";
const useRoot = useRootStore();
const { t } = useI18n();
const activeNames = ref([]);
</script>

<style lang="scss" scoped>
.help-item {
  width: 606rpx;
  margin-top: 24rpx;
  &:first-child {
    margin-top: 36rpx;
  }
  :deep(.van-cell) {
    background: rgba($color: #eeeeee, $alpha: 0.5) !important;
    border-radius: 8rpx;
    color: #333;
  }
  :deep(.van-collapse-item__content) {
    padding: 34rpx 24rpx;
    background: rgba($color: #eeeeee, $alpha: 0.5);
    font-size: 28rpx;
    color: #072f3d;
    border-radius: 8rpx;
  }
}
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
    padding-top: 72rpx;
    display: flex;
    flex-direction: column;
    padding-bottom: 50rpx;
    .team-title-box {
      width: 100%;
      padding-left: 54rpx;
      display: flex;
      align-items: center;
      font-size: 28rpx;
      font-weight: 400;
      color: #ffffff;
      .img {
        width: 47rpx;
        height: 41rpx;
        margin-right: 12rpx;
      }
    }
    .team-income {
      width: 606rpx;
      height: 64rpx;
      padding: 0 24rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: url("@/static/imgs/team-income-bg.png") 0 0/100% 100%;
      margin: auto;
      margin-top: 24rpx;
      .income-text {
        font-size: 28rpx;
        font-weight: 400;
        color: #ffffff;
      }
      .key-box {
        display: flex;
        align-items: center;
        font-size: 28rpx;
        font-weight: 400;
        color: #072f3d;
        .img {
          width: 41rpx;
          height: 40rpx;
          margin-right: 12rpx;
        }
      }
    }
    .tab-box {
      width: 606rpx;
      height: 94rpx;
      background: linear-gradient(
        180deg,
        rgba(233, 241, 255, 0) 0%,
        rgba(39, 189, 246, 0.5) 55%,
        #52eaef 100%
      );
      margin: auto;
      margin-top: 34rpx;
      border-radius: 16rpx;
      padding: 12rpx;
      .tab-list {
        width: 100%;
        height: 100%;
        display: flex;
        .tab-item {
          flex: 1;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 32rpx;
          font-weight: 400;
          color: #072f3d;
          &.active {
            color: #ffffff;
            background: url("@/static/imgs/tab-item-bg.png") 0 0/100% 100%;
          }
        }
      }
    }
    .head-box {
      width: 100%;
      padding: 12rpx 55rpx;
      margin-top: 16rpx;
      display: grid;
      grid-template-columns: 40% 20% 40%;
      .head-item {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 28rpx;
        font-weight: 400;
        color: #ffffff;
      }
    }

    .body-box {
      flex: 1;
      width: 100%;
      height: 0;
      padding: 0 55rpx;
      .scroll-box {
        width: 100%;
        height: 100%;

        .body-row {
          width: 100%;
          display: grid;
          grid-template-columns: 40% 20% 40%;
          .body-item {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 28rpx;
            font-weight: 400;
            color: #072f3d;
            &:not(:last-child) {
              margin-bottom: 26rpx;
            }
            &.amount {
              color: #fff;
            }
          }
        }
      }
    }
  }
  .help-box {
    width: 716rpx;
    min-height: 802rpx;
    margin: auto;
    margin-top: 30rpx;
    background: url("@/static/imgs/help-bg.png") 0 0/100% 100%;
    padding: 55rpx;
    padding-top: 62rpx;
    .help-center-title {
      display: flex;
      align-items: center;
      font-size: 28rpx;
      font-weight: 400;
      color: #ffffff;

      margin-bottom: 32rpx;
      .img {
        width: 45rpx;
        height: 42rpx;
        margin-right: 14rpx;
      }
    }
  }
}
</style>
