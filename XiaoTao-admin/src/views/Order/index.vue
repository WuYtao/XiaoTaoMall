<script setup>
import { getorderall } from '@/apis/order.js'
import { onMounted, ref } from 'vue';
const allorder = ref()
const getorderallMy = async () => {
  const res = await getorderall()
  allorder.value = res.data
}
onMounted(() => getorderallMy())
</script>
<template>
  <h1>全部订单</h1>
  <div class="all">
    <div v-for="item in allorder">
      <span>订单姓名：{{ item.username }}</span>
      <span>订单编号：{{ item.uuidName }}</span>
      <span>订单创建时间：{{ item.creationTime }}</span>
    </div>
  </div>
</template>
<style></style>