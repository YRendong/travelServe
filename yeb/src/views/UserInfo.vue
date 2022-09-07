<template>
<div>
  <el-card class="box-card" style="width: 400px">
    <div slot="header" class="clearfix">
      <span>卡片名称</span>
      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{'列表内容 ' + o }}
    </div>
  </el-card>
</div>
</template>

<script>
export default {
  name: "UserInfo"
}
</script>

<style scoped>

</style>