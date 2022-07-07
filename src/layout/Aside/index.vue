<template>
  <el-aside width="200px">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#001528"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <!-- 无children -->
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <span>Navigator Four</span>
      </el-menu-item>
      <!-- 有children -->
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>

        <el-menu-item index="1-1">item one</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script setup></script>

<style lang="scss" scoped></style>
