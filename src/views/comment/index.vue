<template>
<!-- 用卡片来布局 -->
<el-card>
    <!-- 使用面包屑组件，首先第一个组件就是一个匿名插槽首页/具名插槽title -->
    <!-- el-card 有两个部分头和body 这个头部是具名插槽，body是匿名插槽 -->
    <!-- 头部 -->
    <bread-crumb slot='header' >
    <template slot='title'>评论列表</template>
    </bread-crumb>
    <!-- body部分 -->
    <el-table>
        <el-table-column width='600' label='标题'></el-table-column>

        <el-table-column label='评论状态'></el-table-column>

        <el-table-column label='总评论数'></el-table-column>

        <el-table-column label='粉丝评论数'></el-table-column>

        <el-table-column label='操作'></el-table-column>

    </el-table>

</el-card>
</template>

<script>
export default {

}
</script>

<style>

</style>
