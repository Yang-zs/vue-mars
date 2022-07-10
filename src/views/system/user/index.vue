<template>
  <div class="userPage">
    <!-- 搜索模块 -->
    <el-card class="search-card">
      <el-form ref="search" :inline="true" :model="searchForm">
        <el-form-item label="用户ID" prop="userId">
          <el-input v-model="searchForm.userId" placeholder="请输入用户ID" />
        </el-form-item>
        <el-form-item label="用户名称" prop="userName">
          <el-input
            v-model="searchForm.userName"
            placeholder="请输入用户名称"
          />
        </el-form-item>
        <el-form-item label="状态" prop="state">
          <el-select v-model="searchForm.state">
            <el-option :value="0" label="所有"></el-option>
            <el-option :value="1" label="在职"></el-option>
            <el-option :value="2" label="离职"></el-option>
            <el-option :value="3" label="试用期"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleQuery">查询</el-button>
          <el-button @click="handleReset('search')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="table-card">
      <!-- 数据模块 -->
      <el-button type="primary" @click="dialogVisible = true">新增</el-button>
      <el-button type="danger">批量删除</el-button>
      <!-- 表格 -->
      <!-- @selection-change="handleSelectionChange" -->
      <el-table ref="multipleTableRef" :data="userList" style="width: 100%;">
        <el-table-column type="selection" width="55" />
        <el-table-column prop="userId" label="用户ID" width="120" />
        <el-table-column prop="userName" label="用户名" width="120" />
        <el-table-column prop="userEmail" label="用户邮箱" />
        <el-table-column prop="job" label="用户角色" />
        <el-table-column prop="state" label="用户状态">
          <template #default="scope">
            <span v-if="scope.row.state === 1">在职</span>
            <span v-if="scope.row.state === 2">离职</span>
            <span v-if="scope.row.state === 3">试用期</span>
          </template>
        </el-table-column>
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
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        layout="prev, pager, next"
        :page-size="pageSize"
        :total="total"
      >
      </el-pagination>
    </el-card>
    <!-- 添加弹框 -->
    <el-dialog
      v-model="dialogVisible"
      title="用户新增"
      width="30%"
      :before-close="handleClose"
    >
      <span>表单内容</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ElMessageBox } from 'element-plus'
const dialogVisible = ref(false)
const store = useStore()
const userList = ref([])
const pageNum = ref(1)
const pageSize = ref(10)
const total = ref()
const searchForm = reactive({
  state: 0,
  userId: '',
  userName: ''
})
const search = ref()
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
    userId: searchForm.userId,
    userName: searchForm.userName,
    state: searchForm.state
  }
  const { list, page } = await store.dispatch('userList/getUserList', obj)
  console.log(list, page, 'all/list')
  userList.value = list
  pageNum.value = page.pageNum
  pageSize.value = page.pageSize
  total.value = page.total
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
// 分页
const handleSizeChange = (val) => {
  console.log(`每页 ${val} 条`)
  pageSize.value = val
  getList()
}
const handleCurrentChange = (val) => {
  console.log(`当前页: ${val}`)
  pageNum.value = val
  getList()
  console.log(total.value, '213')
}
// 查询
const handleQuery = () => {
  getList()
}
// 重置
const handleReset = (form) => {
  // proxy.$refs[form].resetFields()
  console.log(222)
}
// 弹框关闭
const handleClose = (done) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
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
