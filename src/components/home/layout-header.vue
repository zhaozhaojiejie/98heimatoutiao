<template>
<el-row class='layout-header'  align='middle' type='flex' justify='space-between'>
    <el-col :span='6' class='left'>
        <i class='el-icon-s-fold'></i>
        <span class='title'>传智播客公司哈哈哈哈哈哈哈</span>
        </el-col>
    <el-col class='right' :span='4'>
        <el-row type='flex' justify='end' align='middle'>
            <img src="../../assets/img/header.jpg" alt="">
            <el-dropdown>
                <span>朝朝姐姐</span>
                <el-dropdown-menu slot='dropdown'>
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>git地址</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-row>
    </el-col>
</el-row>

</template>

<script>
export default {

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
