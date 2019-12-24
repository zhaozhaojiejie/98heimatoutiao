<template>
<div class='layout-aside'>
    <div class='title'>
        <img src="../../assets/img/logo_admin.png" alt="">
    </div>
    <!-- 在标签是直接写一个router  等价于 :router='true' 开启路由，不然这个只是一个router-link 没有路由的功能，这个开启了路由-->
  <el-menu router style="width:231px;" background-color=" #323745" text-color="#adafb5" active-text-color=" #ffd04b">
       <el-menu-item index='/home' >
           <!-- 1.导航组件 -->
           首页
       </el-menu-item>
       <!-- 3.二级组件 -->
       <!-- 1.这里index 相当于router-link 标签里边的to 跳转到那个路径的意思1.这里index区分两点二级路由 -->
       <el-submenu index='1'>
           <!-- 4.这里很666哈，通过有名插槽做导航头 -->
           <span slot='title'>内容管理</span>
           <!-- 5.用匿名插槽做导航隐藏内容 -->
           <el-menu-item index='/home/publish'>发布文章</el-menu-item>
           <el-menu-item index='/home/articles'>内容列表</el-menu-item>
           <el-menu-item index='/home/comment'>评论列表</el-menu-item>
           <el-menu-item index='/home/materia'>素材管理</el-menu-item>
       </el-submenu>

       <!-- 这里index区分两点二级路由 -->
       <el-submenu index='2'>

           <span slot='title'>粉丝管理</span>

           <el-menu-item index='/hong/picture'>图文数据</el-menu-item>
           <el-menu-item index='/hong/fansinfo'>粉丝画像</el-menu-item>
           <el-menu-item index='/hong/fanslife'>粉丝概况</el-menu-item>
           <el-menu-item index='/hong/fanslist'>粉丝列表</el-menu-item>
       </el-submenu>
       <el-menu-item >
           <!-- 2.导航组件 -->
           账户信息
       </el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.layout-aside {
    width: 230px;
    .title {
        text-align:center;
        background-color:#2e2f32;
        padding:10px 0;
        img {
            height: 35px;
        }

    }

}

</style>
