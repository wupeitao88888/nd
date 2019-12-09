<template>
  <div class="gondhistory">
    <div class="imview">
      <el-image class="advimg" fit="cover" :src="banner" />
    </div>
    <div class="pagetitle">
      <img src="http://img.hbnandao.com/static/img/箭头.png" />
      <span @click="goHome()">走进南岛</span>
      <img style="margin-left:18px" src="http://img.hbnandao.com/static/img/箭头.png" />
      <span>发展里程碑</span>
    </div>
    <div class="pageview">
      <div class="titleclass">
        <span class="welcome">发展里程碑</span>
      </div>
      <div class="welcome_icon">
        <img style="width:160px;height:18px;" src="http://img.hbnandao.com/static/img/21313_03.png" />
      </div>
      <img width="1064px" style="margin-top:168px;" src="http://img.hbnandao.com/static/img/里程碑_01.png" />
      <img width="1064px" style="margin-top:-10px;" src="http://img.hbnandao.com/static/img/里程碑_02.png" />
      <img width="1064px" style="margin-top:-10px;" src="http://img.hbnandao.com/static/img/里程碑_03.png" />
    </div>
    <div class="bg"></div>
  </div>
</template>

<script>
export default {
  name: "homereport",
  data: function() {
    return {
      banner: "http://img.hbnandao.com/static/img/二级页banner.png"
    };
  },
  methods: {
    goHome() {
      this.$router.push({ path: "/gond" });
    }
  }
};
</script>

<style lang="less">
.gondhistory {
  min-width: 1400px;
  .imview {
    width: 100%;
    height: 320px;
    margin: 0 auto;
    .advimg {
      width: 100%;
      height: 100%;
    }
  }
  .pagetitle {
    width: 1400px;
    background: rgba(255, 255, 255, 1);
    height: 80px;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(40, 40, 40, 1);
    line-height: 80px;
    margin: 0 auto;
    text-align: left;
    img {
      width: 19px;
      height: 19px;
      position: relative;
      top: 3px;
    }
    span {
      margin-left: 18px;
    }
  }
  .pageview {
    width: 1400px;
    height: 1800px;
    position: relative;
    z-index: 2;
    margin: 0 auto;
    .titleclass {
      width: 100%;
      min-width: 1400px;
      text-align: center;
      margin-top: 59px;
      .welcome {
        font-size: 40px;
        font-family: Hiragino Sans GB;
        font-weight: normal;
        color: rgba(40, 40, 40, 1);
      }
    }
    .welcome_icon {
      width: 100%;
      min-width: 1400px;
      text-align: center;
      margin-top: 15px;
      .welcome_info {
        margin-top: 100px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(40, 40, 40, 1);
      }
    }
  }
  .bg {
    position: absolute;
    z-index: 1;
    top: 1140px;
    width: 100%;
    min-width: 1400px;
    height: 323px;
    background: url("http://img.hbnandao.com/static/img/背景23.png") no-repeat 1px 1px;
    background-size: cover;
  }
}
</style>