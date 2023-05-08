<template>
  <view class="head-box">
    <image v-if="status" src="@/static/imgs/back.png" class="back-img" />
    <text v-else class="title-text">幸福小镇</text>
    <image src="@/static/imgs/lang-img.png" class="lang-img" />
  </view>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
defineProps({
  status: {
    default: false,
    type: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.head-box {
  height: 108rpx;
  width: 100%;
  padding: 0 32rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title-text {
    font-size: 40rpx;
    font-weight: bold;
    color: #ffffff;
  }
  .lang-img {
    width: 82rpx;
    height: 82rpx;
  }
  .back-img {
    width: 80rpx;
    height: 80rpx;
  }
}
</style>
