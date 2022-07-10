<template>
  <div class="login">
    <div class="login-form">
      <h1 class="first-level-title">火星</h1>
      <el-form
        ref="LoginForm"
        :model="loginForm"
        :rules="rules"
        class="demo-ruleForm"
        status-icon
      >
        <el-form-item prop="userName">
          <el-input :prefix-icon="User" v-model="loginForm.userName" />
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input
            type="password"
            :prefix-icon="View"
            v-model="loginForm.userPwd"
          />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { User, View } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
const router = useRouter()
const store = useStore()

const LoginForm = ref('')
const loginForm = reactive({
  userName: 'admin',
  userPwd: '123456'
})
// 登录
// const submitForm = () => {
//   LoginForm.value.validate(async (valid) => {
//     if (!valid) return
//     await store.dispatch('user/login', loginForm)
//     router.push('/')
//   })
// }
const submitForm = async () => {
  const response = await store.dispatch('user/handlerLogin', loginForm)
  if (response !== 200) return
  await store.dispatch('user/getMenuList')
  router.push('/')
  ElMessage({
    message: '登录成功',
    type: 'success'
  })
}

// 校验规则
const rules = reactive({
  userName: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    }
  ],
  userPwd: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    },
    { min: 6, max: 20, message: '密码不能小于6位或者大于20位', trigger: 'blur' }
  ]
})
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  min-height: 100%;
  position: relative;
  background-color: #f8fcff;
  .login-form {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 300px;
    margin: auto;
    width: 400px;
    padding: 50px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px 5px rgb(199 201 203 / 30%);
    .first-level-title {
      font-size: 50px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 30px;
    }

    .el-button--primary {
      width: 100%;
    }
    .el-form-item--feedback {
      margin-top: 30px;
    }
  }
}
</style>
