<template>

  <div class="login-container">
    <!-- <h1>lalala</h1> -->
    <div class="login-head"></div>
    <!-- 配置表单验证
          1，给from绑定model 为表单数据对象
          2，给需要验证的表单 el-from-item绑定 prop属性
            注意：Prop属性 需要指定表单对象的数据名称
            3，给el-from组件的rules 属性配置表单验证规则
          手动触发表单验证
          1.el-from设置ref 起个名字
          2.通过ref获取el-from组件 调用组件的validate方法
     -->
    <el-form
     class="login-form"
      ref="login-form"
      :model="user"
      :rules="fromRules">
      <el-form-item prop="mobile">
        <el-input v-model="user.mobile" placeholder="请输入手机号">
        </el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input v-model="user.code" placeholder="请输入验证码">
        </el-input>
      </el-form-item>
      <el-form-item prop="agree">
          <el-checkbox v-model="user.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" :loading="loginLoding" @click="onLogin">登录
        </el-button>
      </el-form-item>
  </el-form>
  </div>

</template>

<script>
import { login } from '@/api/user.js'

export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810',
        agree: false
      },
      // checked: false,
      loginLoding: false,
      fromRules: {
        // 要验证的数据名称：规则列表
        mobile: [
          { required: true, message: '手机号不能为空', trigger: 'change' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的号码格式', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'blur' },
          { pattern: /^\d{6}$/, message: '请输入正确的验证码', trigger: 'blur' }
        ],
        agree: [
          // 如果验证通过callback
          // 验证失败 callback（new Error('错误消息')）
          {
            validator: (rule, value, callback) => {
              if (value) {
                callback()
              } else {
                callback(new Error('请同意用户协议'))
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onLogin () {
      // 获取表单数据
      // console.log(this.user);
      // const abc = this.user;
      // console.log(user);
      // 表单验证
      this.$refs['login-form'].validate((valid) => {
        // 如果表单验证失败，停止请求提交
        if (!valid) {
          return
        }
        // 验证通过请求登录
        this.login()
      })
      // 处理后端响应结果
      // 成功:xxx
      // 失败:xxx
    },
    login () {
      // 打开loding
      this.loginLoding = true
      // 接口请求可能需要重用
      // 实际工作中 接口容易变动，
      // 建议把所有的请求都封装成函数,管理维护方便,方便重用
      login(this.user).then((res) => {
        // console.log(res)
        this.$message({
          message: '登录成功',
          type: 'success'
        })
        // 关闭loding
        this.loginLoding = false
        window.localStorage.setItem('user', JSON.stringify(res.data.data))
        this.$router.push('/')
      }).catch((err) => {
        console.log('登录失败', err)
        this.$message.error('登陆失败,手机号或验证码错误')
        // 关闭loding
        this.loginLoding = false
      })
    }
  }

}
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
  .login-form {
    background-color: #fff;
    padding: 50px;
    min-width: 300px;
    .login-btn {
      width: 100%;
    }
  }

}

</style>
