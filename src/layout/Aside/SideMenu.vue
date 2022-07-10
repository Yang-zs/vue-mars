<template>
  <!-- 无children -->
  <template v-for="item in menuList" :key="item">
    <el-menu-item v-if="item && !item.children" :index="item.path">
      <span> {{ item.menuName }}</span>
    </el-menu-item>
  </template>
  <!-- 有children -->
  <template v-for="item in menuList" :key="item">
    <el-sub-menu :index="item.path">
      <template #title>
        <span>{{ item.menuName }}</span>
      </template>

      <template v-for="ite in item.children" :key="ite">
        <template v-if="ite && ite.children && ite.children.length > 0">
          <el-menu-item
            v-if="ite.path !== '/staff' && ite.path !== '/salary'"
            :index="ite.path"
            @click="getPath(ite.path)"
            >{{ ite.menuName }}
          </el-menu-item>
        </template>
      </template>
    </el-sub-menu>
  </template>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
const menuList = store.getters.menuList
// console.log(menuList, 'caidanshuju')
const getPath = (path) => {
  // console.log(path, '当前路径')
}
</script>

<style lang="scss" scoped></style>
