<template>
  <div class="coopercaseinfo">
    <div class="imview">
      <el-image class="advimg" fit="cover" :src="banner" />
    </div>
    <div class="pagetitle">
      <img src="http://img.hbnandao.com/static/img/箭头.png" />
      <span @click="goHome()">合作案例</span>
      <img style="margin-left:18px" src="http://img.hbnandao.com/static/img/箭头.png" />
      <span>{{this.$route.query.mtime}}{{this.$route.query.mtitle}}</span>
    </div>
    <div class="pageview">
      <div class="titleview">
        <p class="titlev"></p>
        <p class="title">{{this.$route.query.mtitle}}</p>
        <p class="time">{{this.$route.query.mtime}}</p>
      </div>

      <div style="margin-top:60px;">
        <div class="zhuanlilist">
          <ul>
            <li v-for="(item,index) in listdate" :key="index" style="margin-top:12px;">
              <div class="imgae-view">
                <el-image :src="item"></el-image>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg"></div>
  </div>
</template>

<script>
export default {
  name: "homereport",
  data: function() {
    return {
      banner: "http://img.hbnandao.com/static/img/二级页banner.png",
      listdate: []
    };
  },
  mounted() {
    this.listdate = this.$route.query.mimg;
  },
  methods: {
    goHome() {
      this.$router.push({ path: "/cooperationcase" });
    }
  }
};
</script>

<style lang="less">
.coopercaseinfo {
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
    height: 1100px;
    position: relative;
    margin: 0 auto;
    z-index: 2;
    .titleview {
      width: 940px;
      height: 160px;
      text-align: left;
      background: linear-gradient(
        90deg,
        rgba(69, 189, 118, 1),
        rgba(69, 189, 118, 0)
      );
      .titlev {
        width: 100%;
        height: 40px;
      }
      .title {
        font-size: 32px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        text-shadow: 0px 2px 1px rgba(27, 118, 64, 0.3);
        margin-left: 31px;
      }
      .time {
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        text-shadow: 0px 2px 1px rgba(27, 118, 64, 0.3);
        margin-top: 20px;
        margin-left: 31px;
      }
    }
    .zhuanlilist {
      margin-left:10px;
      ul li {
        float: left;
        list-style: none;
        margin-right: 12px;
        .imgae-view {
          width: 440px;
          height: 360px;
          background: #ffffff;
          box-shadow: 1px 3px 5px 2px rgba(0, 0, 0, 0.1);
          .el-image {
            width: 400px;
            height: 320px;
            margin-top: 20px;
          }
          .info {
            background: rgba(40, 40, 40, 0.8);
            width: 400px;
            font-size: 16px;
            height: 50px;
            font-family: Hiragino Sans GB;
            font-weight: normal;
            color: rgba(255, 255, 255, 1);
            display: block;
            top: -55px;
            left: 20px;
            position: relative;
            line-height: 50px;
          }
        }
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
    background: url("http://img.hbnandao.com/static/img/背景223.png") no-repeat 1px 1px;
    background-size: cover;
  }
}
</style>