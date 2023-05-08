<script setup>
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { useRootStore } from "@/store/Root";
import { getCurrentInstance } from "vue";
import { goUrl } from "@/utils/";
const { proxy } = getCurrentInstance();
const useRoot = useRootStore();
onLaunch(async () => {
  ethereum.on("accountsChanged", (accounts) => {
    //一旦切换账号这里就会执行
    // window.location.reload()
    if (accounts[0] !== useRoot.address) {
      goUrl("/pages/index/index");
      window.location.reload();
    } else if (!accounts[0]) {
      uni.removeStorageSync("x-token");
      goUrl("/pages/index/index");
    }
  });
  useRoot.getHelpList();
  uni.showLoading({ mask: true });
  await useRoot.getConfig();
  await useRoot.login();
  proxy.$isResolve();
});
onShow(() => {});
onHide(() => {});
</script>
<style lang="scss">
page {
  background-color: #f5f5f5;
  position: relative;
  max-width: 450px;
  margin: auto;
}
</style>
