<template>
  <div>
    <div class="add">
      <el-input

          style="width: 20%"
          placeholder="添加用户..."
          suffix-icon="el-icon-plus"
          v-model="pos.name">
      </el-input>
      <el-button icon="el-icon-plus" type="primary" >添加</el-button>
    </div>
    <div class="pos">
      <el-table
          :data="positions"
          stripe
          border
          style="width: 100%">
        <el-table-column
            prop="acc"
            label="账户"
            width="300">
        </el-table-column>
        <el-table-column
            prop="pass"
            label="密码"
            width="300">
        </el-table-column>
        <el-table-column
            prop="id"
            label="地址"
            width="300">
        </el-table-column>
        <el-table-column
            prop="sex"
            label="性别"
            width="50">
        </el-table-column>
        <el-table-column
            prop="num"
            label="联系方式"
            width="300">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test1",
  data(){
    return{
      positions:[],
      pos:{
        name: ''
      }
    }
  }
}
</script>

<style>
    .add{
      margin-top: 10px;
    }
    .pos{
      margin-top: 10px;
    }
</style>