import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from '/src/apis/user.js'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})
  const getUserInfo = async (username, password) => {
    const res = await loginAPI(username, password)
    userInfo.value = res.data
    if (res.data == null) {
      userInfo.value = {}
    }
  }
  const clearUserInfo = () => {
    userInfo.value = {}
    cartStore.clearCart()
  }
  return {
    userInfo,
    getUserInfo,
    clearUserInfo,
  }
},
  {
    persist: true,
  }
)
