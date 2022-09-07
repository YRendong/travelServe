<template>
  <div>
    <div class="about">

      <el-container>
        <el-header>景点信息</el-header>

        <h3>秦始皇陵兵马俑博物馆</h3>

        <h5>秦始皇陵，中国历史上第一位皇帝嬴政（前259—前210年）的陵寝，中国第一批世界文化遗产、第一批全国重点文物保护单位、国家AAAAA级旅游景区 [1]  ，位于陕西省西安市临潼区城东5千米处的骊山北麓。
          秦始皇陵建于秦王政元年（前247年），秦二世二年（前208年）竣工，历时39年，是中国历史上第一座规模庞大，设计完善的帝王陵寝。有内外两重夯土城垣，象征着帝都咸阳的皇城和宫城。陵冢位于内城南部，呈覆斗形，现高51米，底边周长1700余米。据史料记载，秦陵中还建有各式宫殿，陈列着许多奇异珍宝。秦陵四周分布着大量形制不同、内涵各异的陪葬坑和墓葬，已探明的有400多个，其中包括“世界第八大奇迹”中的兵马俑坑。</h5>

      </el-container>

      <el-container>
        <el-header>路线</el-header>
        <el-main>

          <div class="comment-wrap">
            <div class="comment-block">
              <div class = "name">线路1： 秦始皇兵马俑博物馆——秦始皇主题馆——丽山园</div>
            </div>
          </div>
          <div class="comment-wrap">
            <div class="comment-block">
              <div class = "name">线路2： 秦始皇兵马俑博物馆——秦始皇主题馆——丽山园</div>
            </div>

          </div></el-main>
        <el-footer>结伴信息</el-footer>
      </el-container>

      <el-container>
        <el-aside width="200px">已发布结伴信息</el-aside>
        <el-main><template>
          <el-table
              :data="tableData"
              style="width: 100%"
          >
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="昵称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="content"
                label="内容">
            </el-table-column>
          </el-table>

          <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
          </el-pagination>

        </template></el-main>
      </el-container>



      <el-container>
        <el-header height="20px"> </el-header>
        <el-container>
          <el-aside width="200px">发布结伴信息</el-aside>
          <el-main>
            <el-input v-model="input" placeholder="请输入时间"></el-input>
            <el-input v-model="input" placeholder="请输入地点"></el-input>
            <el-input v-model="input" placeholder="请输入要求"></el-input>
            <div style="margin: 10px 0;"></div>

            <el-button type="primary">发布</el-button>
          </el-main>
        </el-container>

      </el-container>


      <el-container>
        <el-header>评论区</el-header>

        <el-container>

          <el-container>
            <template>
              <el-table
                  :data="tableData"
                  style="width: 100%">
                <el-table-column
                    prop="pdate"
                    label="日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="pname"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="comment"
                    label="评价">
                </el-table-column>
              </el-table>
            </template>

          </el-container>

        </el-container>
        <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>

      </el-container>




      <el-container>

        <el-container>
          <el-header>发表评论</el-header>

        </el-container>

      </el-container>
      <el-input
          type="text"
          placeholder="请输入路线"
          v-model="text"
          maxlength="10"
          show-word-limit
      >
      </el-input>
      <div style="margin: 20px 0;"></div>
      <el-input

          type="textarea"
          placeholder="请输入内容"
          v-model="textarea"
          maxlength="30"
          show-word-limit
      >
      </el-input>

      <div style="margin: 10px 0;"></div>

      <el-button type="primary">发布</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      textarea: ''
    }
  }
}

</script>

<script>
export default {
  data() {
    return {
      tableData: [{
        pdate: '2022-05-01',
        pname: '张三',
        comment: '震撼'
      }, {
        pdate: '2022-05-02',
        pname: '李四',
        comment: '牛'
      }, {
        pdate: '2022-05-02',
        pname: '雪豹',
        comment: '非常厉害'
      }, {
        pdate: '2022-05-03',
        pname: '坤坤',
        comment: '强'
      }, {
        pdate: '2022-05-02',
        pname: '李华',
        comment: 'nbnb'
      }
        , {
          pdate: '2022-05-02',
          pname: '小明',
          comment: '很有收获'
        }, {
          pdate: '2022-05-02',
          pname: '小王',
          comment: '很不错'
        }

      ]
    }
  }
}
</script>

<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<style>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>