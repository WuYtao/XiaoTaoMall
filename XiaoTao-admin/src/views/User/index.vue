<script setup>
import { UserAll } from "@/apis/user.js"
import { onMounted, ref } from "vue";
const userdata = ref()
const UserAllMy = async () => {
  const res = await UserAll()
  userdata.value = res.data
  console.log(userdata.value);
}
onMounted(() => UserAllMy())
</script>
<template>
  <h1>用户管理</h1>
  <div>
    <span>头像</span>
    <span>账号</span>
    <span>{{ }}</span>
    <span>{{ }}</span>
    <span>密码</span>
  </div>
  <div v-for="item in userdata">
    <span><img :src="item.image" alt=""></span>
    <span>{{ item.username }}</span>
    <span>{{ }}</span>
    <span>{{ }}</span>
    <span>{{ item.password }}</span>
  </div>
</template>
<style scoped>
span {
  margin-left: 100px;
  margin-top: 20px;
  font-size: 25px;
}

img {
  width: 80px;
  height: 80px;
}
</style>