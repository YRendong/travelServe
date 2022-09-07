<template>
  <div>
    <el-row ref="row" :model="rowForm" class="rowForm">
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <h1 class="loginTitle">景点介绍</h1>
      <el-col :span="6" v-for="(o, index) in 12" :key="o" :offset="index > 0 ? 0 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" >
          <div style="padding: 14px;">
            <scenicName class="name">景点名称</scenicName>
            <div class="bottom clearfix">
              <scenicPrice class="text">门票价格</scenicPrice>
              <scenicLocation class="text">位置</scenicLocation>
              <scenicOpenTime class="text">开始时间</scenicOpenTime>
              <scenicCloseTime class="text">关闭时间</scenicCloseTime>
              <el-button type="text" class="button">点击了解详细信息</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Test3"
}
</script>

<style scoped>

</style>