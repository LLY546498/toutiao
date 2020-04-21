<template>

  <div class="login-container">
    <!-- <h1>lalala</h1> -->
    <div class="login-head"></div>
    <el-form class="login-from" ref="form" :model="user">
      <el-form-item>
        <el-input v-model="user.mobile" placeholder="请输入手机号">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="user.code" placeholder="请输入验证码">
        </el-input>
      </el-form-item>
      <el-form-item>
          <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" :loading="loginLoding" @click="onLogin">登录
        </el-button>
      </el-form-item>
  </el-form>
  </div>

</template>

<script>
import request from '@/utils/request';

export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data() {
    return {
      user: {
        mobile: '',
        code: '',
      },
      checked: false,
      loginLoding: false,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onLogin() {
      // 获取表单数据
      const { user } = this.user;
      // 表单验证
      // 验证通过提交登录
      // 打开loding
      this.loginLoding = true;
      request({
        method: 'POST',
        url: '/mp/v1_0/authorizations',
        data: user,
      }).then((res) => {
        console.log(res);
        this.$message({
          message: '登录成功',
          type: 'success',
        });
        // 关闭loding
        this.loginLoding = false;
      }).catch((err) => {
        console.log('登录失败', err);
        this.$message.error('登陆失败,手机号或验证码错误');
        // 关闭loding
        this.loginLoding = false;
      });
      // 处理后端响应结果
      // 成功:xxx
      // 失败:xxx
    },
  },
};
</script>

<style scoped lang="less">
.login-container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("./login_bg.jpg") no-repeat;
  background-size: cover;
  .login-head {
    height: 57px;
    width: 300px;
    background: url("./logo_index.png") no-repeat;
    margin-bottom: 30px;
  }
  .login-from {
    background-color: #fff;
    padding: 50px;
    min-width: 300px;
    .login-btn {
      width: 100%;
    }
  }


}

</style>
