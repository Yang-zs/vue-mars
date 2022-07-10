<template>
  <div class="userPage">
    <!-- 搜索模块 -->
    <el-card class="search-card"> </el-card>
    <el-card class="table-card">
      <!-- 数据模块 -->
      <el-button type="primary">新增</el-button>
      <el-button type="danger">批量删除</el-button>
      <!-- 表格 -->
      <!-- @selection-change="handleSelectionChange" -->
      <el-table ref="multipleTableRef" :data="userList" style="width: 100%;">
        <el-table-column type="selection" width="55" />
        <el-table-column prop="userId" label="用户ID" width="120" />
        <el-table-column prop="userName" label="用户名" width="120" />
        <el-table-column prop="userEmail" label="用户邮箱" />
        <el-table-column prop="job" label="用户角色" />
        <el-table-column prop="state" label="用户状态" />
        <el-table-column prop="createTime" label="注册时间" />
        <el-table-column prop="lastLoginTime" label="最后登录时间" />
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
    </el-card>
    <el-card class="pagination">
      <template>
        <el-pagination
          :page-size="20"
          :pager-count="11"
          layout="prev, pager, next"
          :total="1000"
          background
        />
      </template>
    </el-card>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const userList = ref([])
const pageNum = ref(1)
const pageSize = ref(10)
const total = ref()

const multipleTableRef = ref()
const multipleSelection = ref()
const toggleSelection = (rows) => {
  if (rows) {
    rows.forEach((row) => {
      this.$refs.multipleTable.toggleRowSelection(row)
    })
  } else {
    this.$refs.multipleTable.clearSelection()
  }
}
// getList
const getList = async () => {
  const obj = {
    pageNum: pageNum.value,
    pageSize: pageSize.value,
    userId: '',
    userName: '',
    state: 0
  }
  const { list, page } = await store.dispatch('userList/getUserList', obj)
  console.log(list, page, 'all/list')
  userList.value = list
  console.log(userList, 'tableData')
}
onMounted(() => {
  getList()
})
// 修改删除
const handleEdit = (index, row) => {
  console.log(index, row)
}
const handleDelete = (index, row) => {
  console.log(index, row)
}
</script>

<style lang="scss" scoped>
.userPage {
  .search-card {
    height: 72px;
  }
  .table-card {
    margin-top: 25px;
  }

  .el-table {
    border-top: 1px solid #eaeef5;
    margin-top: 25px;
  }
  .pagination {
    margin-top: 0px;
  }
}
</style>
