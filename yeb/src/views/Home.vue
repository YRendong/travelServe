<template>
  <div>
    <el-container>
      <el-header class="homeHeader">
        <div class="title">旅游服务管理平台</div>
        <el-dropdown class="userInfo">
            <span class="el-dropdown-link">
              系统管理员 <i></i>
            </span>
            <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>注销登录</el-dropdown-item>

          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu router>
            <el-submenu index="1" v-for="(item,index) in this.$router.options.routes" :key="index"
                        v-if="!item.hidden">
              <template slot="title"><i class="el-icon-location"></i>
                <span>{{ item.name }}</span>
              </template>


              <el-menu-item :index="children.path" v-for="(children,index) in item.children">{{ children.name }}
              </el-menu-item>

            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home"

}
</script>

<style>
.homeHeader {
  background: #2293c1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  box-sizing: border-box;
}

.homeHeader .title {
  font-size: 30px;
  font-family: 楷体;
  color: white;
}

.homeHeader .userInfo{
  color: white;
}
</style>