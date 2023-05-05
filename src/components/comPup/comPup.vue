<template>
  <van-popup v-model:show="confirmStatus">
    <view class="max-box"> </view>
  </van-popup>
</template>

<script setup>
import { ref } from "vue";
import usePupStatus from "@/hooks/usePupStatus";
import { useRootStore } from "@/store/Root";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const useRoot = useRootStore();
const { confirmStatus } = usePupStatus();
const cancelPup = () => {
  confirmStatus.value = false;
};
const props = defineProps({});
const clickConfirm = () => {};
</script>

<style lang="scss" scoped>
.max-box {
  position: relative;
  width: 684rpx;
  height: 622rpx;
  background: #ffffff;
  box-shadow: 0rpx 2rpx 12rpx 2rpx rgba(22, 105, 233, 0.16);
  border-radius: 24rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background: url("@/static/imgs/pup-bg.png") 0 0/100% 100%;
}
</style>
