<script setup>
import MyEchartVue from '@/views/Echart/MyEchart.vue'
import { options1, options2, options3 } from "@/views/Echart/options/options.js"
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
const optinos = ref(options1)
const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>
<template>
  <div class="main">
    <h1>欢迎来到XiaoTaoMall</h1>
    <MyEchartVue :optinos="optinos" />
  </div>
</template>
<style lang="scss" scoped>
layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
  border-right: none;
}

.layout-container-demo .el-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}

// 
.main {
  padding: 10px 10px 10px 10px;
}
</style>