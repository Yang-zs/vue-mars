<template>
  <el-container>
    <Aside></Aside>
    <el-container>
      <el-header>
        <Navbar></Navbar>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Aside from './Aside/index.vue'
import Navbar from './Navbar/index.vue'
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  color: #333;
  padding: 0;
  margin: 0;
}

.el-aside {
  color: #333;
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
.el-container {
  height: 100%;
}
</style>
