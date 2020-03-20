<template>
  <div class="contactus">
    <div class="imview">
      <el-image class="advimg" fit="cover" :src="banner" />
    </div>

    <div class="pageview">
      <div class="titleclass">
        <span class="welcome">联系我们</span>
      </div>
      <div class="welcome_icon">
        <img style="width:158px;height:23px;" src="http://img.hbnandao.com/static/img/联系我们.png" />
      </div>

      <div style="margin-top:130px;">
        <div class="zhuanlilist">
          <div class="countus">
            <p class="mdiv"></p>
            <p class="title">河北南岛建筑模板有限公司</p>
            <p class="info" style="margin-top:18px;">地址：河北省文安县兴隆宫镇夏村</p>
            <p class="info">手机：18210000078／13347900833</p>
            <p class="info">Email: jin000008@163.com</p>
            <p class="info">邮编：065800</p>

            <img class="dianhua" src="http://img.hbnandao.com/static/img/call.png" alt="">
          </div>
        </div>
        <div style="margin-top:60px;">
          <div style="width:800px;margin: 0 auto;">
              <img style="width:800px;" src="http://img.hbnandao.com/static/img/ditu.png" />
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
      banner: "http://img.hbnandao.com/static/img/二级页banner.png",
      bannerbg: "http://img.hbnandao.com/static/img/welcomebg.png"
    };
  },
  methods: {
    goHistory() {
      this.$router.push({ path: "/gondhistory" });
    }
  }
};
</script>

<style lang="less">
.contactus {
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
    height: 1250px;
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
      width: 1400px;
      margin: 0 auto;

      .countus {
        width: 800px;
        height: 260px;
        margin: 0 auto;
        text-align: left;
        background: rgba(69, 189, 118, 1);
        .mdiv{
          width: 30px;
          height:50px;
        }
        .title{
          font-size:20px;
          font-family:Microsoft YaHei;
          font-weight:400;
          margin-left: 50px;
          color:rgba(255,255,255,1);
        }
        .info{
          font-size:14px;
          font-family:Microsoft YaHei;
          font-weight:400;
             margin-left: 50px;
          color:rgba(255,255,255,1);
          margin-top: 9px;
        }
        .dianhua{
          float: right;
          position: relative;
          top:-165px;
          right:64px;
        }
      }
    }
  }
}
</style>