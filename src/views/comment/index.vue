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
    <el-table :data='list'>
        <el-table-column prop='title'  width='600' label='标题'></el-table-column>
       <!-- 状态行无法显示，element-ui 有一个属性：formatter='方法'  格式化内容-->
        <el-table-column :formatter='formatterBool' prop='comment_status'  label='评论状态'></el-table-column>
        <el-table-column prop='total_comment_count'  label='总评论数'></el-table-column>
        <el-table-column prop='fans_comment_count'  label='粉丝评论数'></el-table-column>

        <el-table-column   label='操作'>
          <!-- 作用域插槽，属性对象化 -->
          <template slot-scope='obj'>
        <!-- {{obj.row.comment_statuss}} -->
          <!-- 1.操作组件  2.作用域插槽   -->
          <el-button type='text'>修改</el-button>
          <el-button type='text'>{{obj.row.comment_status ? '关闭评论':'打开评论'}}</el-button>
          </template>
        </el-table-column>

    </el-table>

</el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    // 请求评论数据
    getComment () {
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment' }

      }).then(result => {
        this.list = result.data.results
        console.log(this.list)
      })
    },
    // 定义一个布尔值转换华方法
    formatterBool (row, column, callValue, index) {
      // row当前行数
      // column当前列属性
      // callValue当前单元格的
      return callValue ? '正常' : '关闭'
    }

  },
  created () {
    // 调用请求数据方法
    this.getComment()
  }

}
</script>

<style>

</style>
