<template>
  <div class="homepartner">
    <div class="imview">
      <el-image class="advimg" fit="cover" :src="banner" />
    </div>
    <div class="pagetitle">
      <img src="http://img.hbnandao.com/static/img/箭头.png" />
      <span @click="goHome()">首页</span>
      <img style="margin-left:18px" src="http://img.hbnandao.com/static/img/箭头.png" />
      <span>合作伙伴</span>
    </div>
    <div class="pageview">
      <div class="titleclass">
        <span class="welcome">合作伙伴</span>
      </div>
      <div class="welcome_icon">
        <img style="width:279px;height:20px;" src="http://img.hbnandao.com/static/img/合作伙伴.png" />
      </div>

      <div class="zhuanlilist">
        <ul>
          <li>
            <img src="http://img.hbnandao.com/static/img/伙伴logo_01.png" />
          </li>
          <li>
            <img src="http://img.hbnandao.com/static/img/伙伴logo_03.png" />
          </li>
          <li>
            <img src="http://img.hbnandao.com/static/img/伙伴logo_05.png" />
          </li>
          <li>
            <img src="http://img.hbnandao.com/static/img/伙伴logo_07.png" />
          </li>
          <li>
            <img src="http://img.hbnandao.com/static/img/伙伴logo_09.png" />
          </li>
          <li>
            <img src="http://img.hbnandao.com/static/img/伙伴logo_15.png" />
          </li>
          <li>
            <img src="http://img.hbnandao.com/static/img/伙伴logo_16.png" />
          </li>
          <li>
            <img src="http://img.hbnandao.com/static/img/伙伴logo_17.png" />
          </li>
          <li>
            <img src="http://img.hbnandao.com/static/img/伙伴logo_18.png" />
          </li>
          <li>
            <img src="http://img.hbnandao.com/static/img/伙伴logo_19.png" />
          </li>
        </ul>
      </div>
    </div>
    <div class="bgpageview">
      <el-image class="advimg" fit="cover" :src="bannerbg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "homereport",
  data: function() {
    return {
      banner: "http://img.hbnandao.com/static/img/二级页banner.png",
      bannerbg: "http://img.hbnandao.com/static/img/welcomebg.png"
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
.homepartner {
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
  .bgpageview {
    position: absolute;
    z-index: 1;
    top: 1020px;
  }
  .pageview {
    position: relative;
    top: 0px;
    z-index: 2;
    width: 1400px;
    height: 900px;
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
      margin-left: 92px;
      margin-top: 110px;
      height: 451px;
      ul li {
        float: left;
        margin-left: 19px;
        list-style: none;
        margin-top: 20px;
        img {
          width: 220px;
          height: 180px;
        }
      }
    }
  }
}
</style>