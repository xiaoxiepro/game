import { ref } from 'vue'
// 弹窗状态
const confirmStatus = ref(true)
export default function usePupStatus() {
    return {
        confirmStatus,
    }
}