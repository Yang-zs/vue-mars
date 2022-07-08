<template>
  <div class="userPage">
    <el-card class="search-card"> </el-card>
    <el-card class="table-card">
      <el-button type="primary">新增</el-button>
      <el-button type="danger">批量删除</el-button>
    </el-card>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.userPage {
  .search-card {
    height: 72px;
  }
  .table-card {
    margin-top: 25px;
  }
}
</style>
