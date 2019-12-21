<template>
<!-- 1.一个外部容器 -->
    <el-container>
        <!-- 2.左右布局 -->
        <el-aside style="background-color:#353b4e;height:100vh;width:230px;">
            <layoutAside></layoutAside>
        </el-aside>
        <!-- 3.再放一个container -->
        <el-container>
            <el-header>头部</el-header>
            <el-main>主题区</el-main>
        </el-container>
    </el-container>
</template>

<script>
// 4.引入左边导航的组件
import layoutAside from '../../components/home/layout-aside'
export default {
  components: {
    layoutAside
  }

}
</script>

<style>

</style>
