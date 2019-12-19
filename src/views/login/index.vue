<template>
  <div class="login">
    <el-card class="login-card">
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <el-form>
        <el-form-item>
          <el-input placeholder="请输入手机号

码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input style="width:65%" placeholder="请输入验证码"></el-input>
          <el-button style="float:right" plain>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-radio-group v- model="form.resource">
            <el-radio label="我已经阅读并且

同意"></el-radio>
          </el-radio-group>
          <!-- <el-checkbox v- model="loginForm.check">
            我已阅读并同意用户协议和隐私
            条款
          </el-checkbox> -->
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {}
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
