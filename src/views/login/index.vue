<template>
  <div class="login">
    <el-card class="login-card">
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <el-form  ref='myForm' style='margin-top:30px' :model='loginForm' :rules="loginRules">
        <el-form-item prop='mobile'>
          <el-input v-model='loginForm.mobile' placeholder="请输入手机号
码"></el-input>
        </el-form-item>
        <el-form-item  prop='code'>
          <el-input style="width:65%" placeholder="请输入验证码" v-model='loginForm.code'></el-input>
          <el-button style="float:right"  plain>发送验证码</el-button>
        </el-form-item>
        <el-form-item prop='check'>
          <el-checkbox v-model="loginForm.check">
            我已阅读并同意用户协议和隐私
            条款
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button @click='submitLogin' type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>

export default {
  // 做表单数据的校验、这里注意的是data是一个方法
  // 在data中定义表单数据对象
  data () {
    return {
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        check: '' // 是否勾选
      },
      loginRules: {
        // 验证规则，验证表单的可以 key（字段名）：value(数组)
        mobile: [ { required: true, message: ' 请输入手机号 ' }, { pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确' } ],
        code: [ { required: true, message: '请输入验证码' }, { pattern: /^\d{6}$/, message: '验证码格式不正确' } ],
        check: [ { validator: function (rule, value, callback) {
          console.log(value)
          if (value) {
            callback()
          } else {
            callback(new Error('您必须无条件投降'))
          }
        } }]
      } }
  },
  methods: {
    submitLogin () {
      // 获取整个标签元素，el-form
      this.$refs.myForm.validate((isOk) => {
        if (isOk) {
          // 前段校验成功，调用接口
          // 地址参数 查询参数 params 对象
          // body 参数 data对象
          // 通过this.$axios（）调用接口请求数据
          this.$axios({
            url: '/authorizations',
            method: 'post',
            data: this.loginForm
          }).then(result => {
            console.log(result)
            // 当点击输入用户名和验证码的时候，狗太会给前段用户一个token 在用户登录是需要携带这个token才能跳转，所以需要前段存下这个token
            // 当请求成功的时候就生成一个token然后存储在浏览器用户
            window.localStorage.setItem('user-token', result.data.data.token)
          }).catch(error => {
            console.log(error)
          })
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
.login {
  // 1.scoped 是样式值用用于这个组件是作用，
  //因为样式默认是全局的，实现的原理是给当前的标签生成了一个data-v-随机数
  // 2.lang是语言是意思，这里指定样式文件是less文件语
  background-image: url(../../assets/img/login_bg.jpg);
  background-size: cover;
  height: 100vh; //上面是自适应平铺背景图
  display: flex;
  justify-content: center; //左右居中
  align-items: center; //上下居中
  .login-card {
    width: 440px;
    height: 350px;
    .title {
      text-align: center;
      img {
        height: 44px;
      }
    }
  }
}
</style>
