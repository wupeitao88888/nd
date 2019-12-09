<template>
  <div class="newsndinfo">
    <div class="imview">
      <el-image class="advimg" fit="cover" :src="banner" />
    </div>
    <div class="pagetitle">
      <img src="http://img.hbnandao.com/static/img/箭头.png" />
      <span @click="goHome()">新闻资讯</span>
      <img style="margin-left:18px" src="http://img.hbnandao.com/static/img/箭头.png" />
      <span>{{this.$route.query.mtitle}}</span>
    </div>
    <div class="pageview">
      <div style="margin-top:34px;">
        <div class="newinfo">
          <p class="title">{{this.$route.query.mtitle}}</p>
          <p
            class="actour"
          >发布日期：{{this.$route.query.mtimedate}}/{{this.$route.query.mday}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;责编：{{this.$route.query.mname}}</p>

          <img class="infoview" :src="this.$route.query.mimg" />
          <div class="infotext">
            <p class="info">{{this.$route.query.minfo}}</p>
          </div>
        </div>
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
      this.$router.push({ path: "/newsnd" });
    }
  }
};
</script>

<style lang="less">
.newsndinfo {
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
    height: 1000px;
    position: relative;
    margin: 0 auto;
    .newinfo {
      width: 960px;
      margin: 0 auto;
      text-align: left;
      .title {
        font-size: 40px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: rgba(40, 40, 40, 1);
      }
      .actour {
        margin-top: 19px;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(40, 40, 40, 1);
      }
      .infoview {
        width: 100%;
        margin-top: 60px;
      }
      .infotext {
        width: 908px;
        height: 100px;
        background: rgba(69, 189, 118, 0.8);
        position: relative;
        top: -160px;
        margin: 0 auto;
        padding-top:14px;
        padding-bottom: 14px;
        .info {
          margin-left: 14px;
          margin-right:14px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          text-shadow: 0px 1px 0px rgba(40, 40, 40, 0.3);
        }
      }
    }
  }
}
</style>