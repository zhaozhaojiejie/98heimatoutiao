<template>
<!-- 1.一个外部容器 -->
    <el-container>
        <!-- 2.左右布局 -->
        <el-aside style="background-color:#353b4e;height:100vh;width:230px;">
            <layout-aside></layout-aside>
        </el-aside>
        <!-- 3.再放一个container -->
        <el-container>
            <el-header>
              <layout-header></layout-header>
            </el-header>
            <el-main>主题区</el-main>
        </el-container>
    </el-container>
</template>

<script>
// 4.引入左边导航的组件
import layoutAside from '../../components/home/layout-aside'
import layoutHeader from '../../components/home/layout-header'

export default {
  components: {
    // 错误点，先命名组件标签，然后引用注册引用变量
    'layout-aside': layoutAside,
    'layout-header': layoutHeader

  }

}
</script>

<style>

</style>
