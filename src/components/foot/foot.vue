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
        <text class="text select">{{ item.text }}</text>
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
  width: 100%;
  max-width: 450px;
  height: 144rpx;
  background: linear-gradient(
    180deg,
    rgba(233, 241, 255, 0) 0%,
    rgba(39, 189, 246, 0.5) 55%,
    #52eaef 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  .tab-list {
    width: 686rpx;
    height: 112rpx;
    background: #80d8f1;
    box-shadow: 0rpx 4rpx 12rpx 2rpx rgba(0, 0, 0, 0.1);
    border-radius: 56rpx;
    display: flex;
    .tab-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .img {
        width: 40rpx;
        height: 41rpx;
        margin-bottom: 2rpx;
      }
      .text {
        font-size: 24rpx;
        font-weight: 500;
        color: #ffffff;
        &.select {
          color: #072f3d;
        }
      }
    }
  }
}
</style>
