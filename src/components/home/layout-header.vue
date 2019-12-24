<template>
<el-row class='layout-header'  align='middle' type='flex' justify='space-between'>
    <el-col :span='6' class='left'>
        <i class='el-icon-s-fold'></i>
        <span class='title'>传智播客公司哈哈哈哈哈哈哈</span>
        </el-col>
    <el-col class='right' :span='4'>
        <el-row type='flex' justify='end' align='middle'>
            <img  :src="userInfo.photo?userInfo.photo:defaultImg" alt="">
            <el-dropdown @command='handle'>
            <span>{{userInfo.name}}</span>
                <el-dropdown-menu slot='dropdown'>
                    <el-dropdown-item command='info' >个人信息</el-dropdown-item>
                    <el-dropdown-item command='git'>git地址</el-dropdown-item>
                    <el-dropdown-item command='logout'>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-row>
    </el-col>
</el-row>

</template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      defaultImg: require('../../assets/img/header.jpg')// 图片地址在渲染过程中编译成base64的字符串，这里先存起来
    }
  },
  // 实例化时就调用
  created () {
    // 获取token 在测试的时候记得一定要从新登陆过
    let token = window.localStorage.getItem('user-token')
    this.$axios({
      url: './user/profile',
      headers: {
        // 传入token
        Authorization: `Bearer ${token}`

      }
    }).then(result => {
      console.log(result)

      this.userInfo = result.data.data
      console.log(this.userInfo)
    })
  },
  methods: {
    handle (command) {
      if (command === 'logout') {
        window.localStorage.removeItem('user-token')
        this.$router.push('./login')
      } else if (command === 'git') {
        window.location.href = 'https://github.com/zhaozhaojiejie/98heimatoutiao'
      }
    }

  }

}
</script>

<style lang='less' scoped>
.layout-header{
    height: 60px;
    .left{
        font-size:18px;
        .title{
            margin-left:4px;
            color:#2c3e50;
            font-size:14px;
        }
    }
    .right{
        img{
            width: 40px;
            height: 40px;
            border-radius:20px;
        }
    }

}

</style>
