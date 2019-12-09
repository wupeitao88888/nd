<template>
  <div class="homereport">
    <div class="imview">
      <el-image class="advimg" fit="cover" :src="banner" />
    </div>
    <div class="pagetitle">
      <img src="http://img.hbnandao.com/static/img/箭头.png" />
      <span @click="goHome()">首页</span>
      <img style="margin-left:18px" src="http://img.hbnandao.com/static/img/箭头.png" />
      <span>检测报告</span>
    </div>
    <div class="pageview">
      <div class="titleclass">
        <span class="welcome">专利证书</span>
      </div>
      <div class="welcome_icon">
        <img style="width:248px;height:20px;" src="http://img.hbnandao.com/static/img/专利证书.png" />
      </div>
      <div class="zhuanlilist">
        <ul>
          <li>
            <img src="http://img.hbnandao.com/static/img/专利证书1.png" />
          </li>
          <li>
            <img src="http://img.hbnandao.com/static/img/专利证书2.png" />
          </li>
          <li>
            <img src="http://img.hbnandao.com/static/img/专利证书3.png" />
          </li>
          <li>
            <img src="http://img.hbnandao.com/static/img/专利证书4.png" />
          </li>
        </ul>
      </div>
      <div style="height:25px;width:100%;"></div>
      <div class="titleclass">
        <span class="welcome">检测报告</span>
      </div>
      <div class="welcome_icon">
        <img style="width:159px;height:20px;" src="http://img.hbnandao.com/static/img/检测报告.png" />
      </div>
      <div class="jiancelilist">
        <ul>
          <li>
            <img src="http://img.hbnandao.com/static/img/检验报告_01.png" />
          </li>
          <li>
            <img src="http://img.hbnandao.com/static/img/检验报告_03.png" />
          </li>
          <li>
            <img src="http://img.hbnandao.com/static/img/检验报告_05.png" />
          </li>
          <li>
            <img src="http://img.hbnandao.com/static/img/检验报告_07.png" />
          </li>
        </ul>
      </div>
    </div>
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
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style lang="less">
.homereport {
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
    border-bottom: 1px solid rgba(40, 40, 40, 0.3);
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
    height: 1400px;
    background: rgba(255, 255, 255, 1);
    border-bottom: 1px solid rgba(40, 40, 40, 0.3);
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
    .zhuanlilist {
      margin-left: 17px;
      margin-top: 77px;
      height: 451px;
      ul li {
        float: left;
        margin-left: 16px;
        list-style: none;
      }
    }

    .jiancelilist {
      margin-left: 41px;
      margin-top: 90px;
      height: 400px;
      ul li {
        float: left;
        margin-left: 32px;
        list-style: none;
      }
    }
  }
}
</style>