<template>
  <el-aside width="200px">
    <div class="logo">
      <img src="http://localhost:8080/src/assets/logo.png" alt="" />
      <span>Manager</span>
    </div>
    <el-menu
      router
      active-text-color="#ffd04b"
      background-color="#001528"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
    >
      <side-menu></side-menu>
    </el-menu>
  </el-aside>
</template>

<script setup>
import SideMenu from './SideMenu.vue'
</script>

<style lang="scss" scoped>
.el-aside {
  border-right: 0;
  height: 100%;
  border-right: 0;
  overflow: hidden;
  .el-menu {
    height: 100%;
    border-right: 0;
  }
  .logo {
    display: flex;
    align-items: center;
    font-size: 18px;
    background-color: #001527;
    height: 50px;
    color: white;
    img {
      margin: 0 16px;
      width: 32px;
      height: 32px;
    }
  }
}
</style>
