<template>
  <div class="navbar">
    <div class="left">
      <el-icon><Fold /></el-icon>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{ $route.meta.title }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right">
      <el-icon><Bell /></el-icon>
      <el-dropdown>
        <span class="el-dropdown-link">
          admin
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>邮箱: admin@imooc.com</el-dropdown-item>
            <el-dropdown-item @click="logOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import store from '@/store'
import { ArrowDown, ArrowRight, Fold, Bell } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
const router = useRouter()
const logOut = () => {
  store.dispatch('user/handlerLoginOut')
  router.push('/login')
  ElMessage({
    message: '退出成功',
    type: 'success'
  })
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    margin-left: 10px;
    .el-breadcrumb {
      margin-left: 10px;
    }
  }
  .right {
    display: flex;
    width: 100px;
    align-items: center;
    .el-dropdown {
      margin-left: 15px;
    }
    .el-dropdown-link {
      color: #409eff;
    }
    .el-dropdown-link {
      cursor: pointer;
    }
  }
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
