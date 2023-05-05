<template>
  <view class="foot-box">
    <view class="tab-list">
      <view
        class="tab-item"
        @click="goPage(item.pages)"
        v-for="(item, index) in tabList"
        :key="index"
      >
        <image
          v-if="item.index == selectIndex"
          :src="item.selectIcon"
          class="img"
        />
        <image v-else :src="item.icon" class="img" />
        <text class="text select">{{ t(item.text) }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import tabList from "@/mock/tab";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
defineProps({
  selectIndex: {
    default: 0,
    type: Number,
  },
});
const goPage = (url) => {
  uni.navigateTo({
    url,
  });
};
</script>

<style lang="scss" scoped>
.foot-box {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 750rpx;
  height: 144rpx;
  background: rgba($color: #ffffff, $alpha: 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  .tab-list {
    width: 686rpx;
    height: 112rpx;
    background: #ffffff;
    box-shadow: 0px 4rpx 12rpx 2rpx rgba(0, 0, 0, 0.1);
    border-radius: 56rpx;
    display: flex;
    padding: 0 80rpx;
    .tab-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .img {
        width: 46rpx;
        height: 47rpx;
      }
      .text {
        font-size: 24rpx;
        color: #999999;
        &.select {
          color: #4c426e;
        }
      }
    }
  }
}
</style>
