<script setup>
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
import LayoutHerad from './components/LayoutHerad.vue';
import { RouterView } from 'vue-router';
const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>
<template>
  <LayoutHerad />
  <div>
    <el-container class="layout-container-demo" style="height: 900px">
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu :default-openeds="['1', '3']">
            <el-sub-menu index="1">
              <template #title>
                <el-icon>
                  <message />
                </el-icon>数据管理
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                  <RouterLink to="/">
                    首页数据
                  </RouterLink>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <RouterLink to="/user">
                    用户管理
                  </RouterLink>
                </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><icon-menu /></el-icon>商品管理
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">
                  <RouterLink to="/goods/all">
                    全部商品查询
                  </RouterLink>
                </el-menu-item>
                <el-menu-item index="2-2">
                  <RouterLink to="/goods/add">
                    添加商品
                  </RouterLink>
                </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <el-icon>
                  <setting />
                </el-icon>订单管理
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">
                  <RouterLink to="/order/all">
                    全部订单查询
                  </RouterLink>
                </el-menu-item>
                <el-menu-item index="3-2">
                  <RouterLink to="/join">
                    快递公司加盟
                  </RouterLink>
                </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <div class="toolbar">
            <el-dropdown>
              <el-icon style="margin-right: 8px; margin-top: 1px">
                <setting />
              </el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>关于我们</el-dropdown-item>
                  <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <span>涛哥</span>
          </div>
        </el-header>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
  // color: var(--el-text-color-primary);
  // background: var(--el-color-primary-light-8);
  background-color: rgb(33, 38, 64);
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

.left-item {
  background-color: rebeccapurple In !important;
}
</style>