<template>
  <div id="app">
    <div class="header">
      <span class="title">
        <el-avatar shape="square" v-show="false" src="https://empty">
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
        </el-avatar>
      </span>
      <ul>
        <li>
          <div class="box">
            <span :class="home" @click="homeSelect()">首页</span>
          </div>
        </li>
        <li>
          <div class="box">
            <span :class="product" @click="productSelect()">产品展示</span>
          </div>
        </li>
        <li>
          <div class="box">
            <span :class="goNd" @click="goNdSelect()">走进南岛</span>
          </div>
        </li>
        <li>
          <div class="box">
            <span :class="news" @click="newsSelect()">新闻资讯</span>
          </div>
        </li>
        <li>
          <div class="box">
            <span :class="cases" @click="casesSelect()">合作案例</span>
          </div>
        </li>
        <li>
          <div class="box">
            <span :class="we" @click="weSelect()">联系我们</span>
          </div>
        </li>
      </ul>
    </div>
    <router-view />
    <div class="footview">
      <div class="childfoot">
        <div class="footview1">
          <p class="foottitle">导航入口</p>
          <img src="./assets/img/分割线footer.png" />
          <p class="footinfofast" @click="homeSelect()">首页</p>
          <p class="footinfo" @click="productSelect()">产品展示</p>
          <p class="footinfo" @click="goNdSelect()">走进南岛</p>
          <p class="footinfo" @click="newsSelect()">新闻资讯</p>
          <p class="footinfo" @click="casesSelect()">合作案例</p>
          <p class="footinfo" @click="weSelect()">联系我们</p>
        </div>
        <div class="footview2">
          <p class="foottitle">联系我们</p>
          <img src="./assets/img/分割线footer.png" />
          <p class="footinfofast">电话：18210000078</p>
          <p
            class="footinfo"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13347900833</p>
          <p class="footinfo">邮编：065800</p>
          <p class="footinfo">地址：河北省文安县兴隆宫镇夏村</p>
        </div>
        <div class="footview3">
          <p class="foottitle">南岛模板</p>
          <img src="./assets/img/分割线footer.png" />
          <p class="footinfofast">公司以“专业，可信赖”为基本宗旨，</p>
          <p class="footinfo">秉承“合作共赢”的服务理念，</p>
          <p class="footinfo">塑造鲜明独特的企业形象，坚持以人为本，</p>
          <p class="footinfo">倡导凝聚人心的企业精神，创立行之有效</p>
          <p class="footinfo">的管理模式，在团结一致、共同奋斗的氛围中创造未来。</p>
        </div>
        <div class="footview4">
          <!-- <img src="./assets/img/二维码底色.png" /> -->
           <img src="http://img.hbnandao.com/static/img/wexin.jpeg" />
          
          <p>南&nbsp;&nbsp;&nbsp;&nbsp;岛&nbsp;&nbsp;&nbsp;&nbsp;微&nbsp;&nbsp;&nbsp;&nbsp;信&nbsp;&nbsp;&nbsp;&nbsp;号</p>
        </div>
      </div>
    </div>
    <div class="rezheng">
      <p>©冀ICP备19017250号</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      home: "select",
      product: "normal",
      goNd: "normal",
      news: "normal",
      cases: "normal",
      we: "normal"
    };
  },
  watch: {
    $route(to, from) {
      console.log(window.location.href);
      console.log(this.$route.path);
      console.log(this.$route.params);
      switch (this.$route.path) {
        case "/":
        case "/homereport":
        case "/homepartner":
          this.shomeSelect();
          break;
        case "/product":
          this.sproductSelect();
          break;
        case "/gond":
        case "/gondhistory":
          this.sgoNdSelect();
          break;
        case "/newsnd":
        case "/newsndinfo":
          this.snewsSelect();
          break;
        case "/cooperationcase":
        case "/cooperationcaseinfo":
          this.scasesSelect();
          break;
        case "/contactus":
          this.sweSelect();
          break;
      }
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },
  mounted() {
    console.log(window.location.href);
    console.log(this.$route.path);
    console.log(this.$route.params);
    switch (this.$route.path) {
      case "/":
      case "/homereport":
      case "/homepartner":
        this.homeSelect();
        break;
      case "/product":
        this.productSelect();
        break;
      case "/gond":
      case "/gondhistory":
        this.goNdSelect();
        break;
      case "/newsnd":
      case "/newsndinfo":
        this.newsSelect();
        break;
      case "/cooperationcase":
      case "/cooperationcaseinfo":
        this.casesSelect();
        break;
      case "/contactus":
        this.weSelect();
        break;
    }
  },
  methods: {
    homeSelect() {
      this.$data.home = "select";
      this.$data.product = "normal";
      this.$data.goNd = "normal";
      this.$data.news = "normal";
      this.$data.cases = "normal";
      this.$data.we = "normal";
      this.$router.push({ path: "/" });
    },
    productSelect() {
      this.$data.home = "normal";
      this.$data.product = "select";
      this.$data.goNd = "normal";
      this.$data.news = "normal";
      this.$data.cases = "normal";
      this.$data.we = "normal";
      this.$router.push({ path: "/product" });
    },
    goNdSelect() {
      this.$data.home = "normal";
      this.$data.product = "normal";
      this.$data.goNd = "select";
      this.$data.news = "normal";
      this.$data.cases = "normal";
      this.$data.we = "normal";
      this.$router.push({ path: "/gond" });
    },
    newsSelect() {
      this.$data.home = "normal";
      this.$data.product = "normal";
      this.$data.goNd = "normal";
      this.$data.news = "select";
      this.$data.cases = "normal";
      this.$data.we = "normal";
      this.$router.push({ path: "/newsnd" });
    },
    casesSelect() {
      this.$data.home = "normal";
      this.$data.product = "normal";
      this.$data.goNd = "normal";
      this.$data.news = "normal";
      this.$data.cases = "select";
      this.$data.we = "normal";
      this.$router.push({ path: "/cooperationcase" });
    },
    weSelect() {
      this.$data.home = "normal";
      this.$data.product = "normal";
      this.$data.goNd = "normal";
      this.$data.news = "normal";
      this.$data.cases = "normal";
      this.$data.we = "select";
      this.$router.push({ path: "/contactus" });
    },
      shomeSelect() {
      this.$data.home = "select";
      this.$data.product = "normal";
      this.$data.goNd = "normal";
      this.$data.news = "normal";
      this.$data.cases = "normal";
      this.$data.we = "normal";
    },
    sproductSelect() {
      this.$data.home = "normal";
      this.$data.product = "select";
      this.$data.goNd = "normal";
      this.$data.news = "normal";
      this.$data.cases = "normal";
      this.$data.we = "normal";
    },
    sgoNdSelect() {
      this.$data.home = "normal";
      this.$data.product = "normal";
      this.$data.goNd = "select";
      this.$data.news = "normal";
      this.$data.cases = "normal";
      this.$data.we = "normal";
    },
    snewsSelect() {
      this.$data.home = "normal";
      this.$data.product = "normal";
      this.$data.goNd = "normal";
      this.$data.news = "select";
      this.$data.cases = "normal";
      this.$data.we = "normal";
    },
    scasesSelect() {
      this.$data.home = "normal";
      this.$data.product = "normal";
      this.$data.goNd = "normal";
      this.$data.news = "normal";
      this.$data.cases = "select";
      this.$data.we = "normal";
    },
    sweSelect() {
      this.$data.home = "normal";
      this.$data.product = "normal";
      this.$data.goNd = "normal";
      this.$data.news = "normal";
      this.$data.cases = "normal";
      this.$data.we = "select";
    }
  }
};
</script>

<style lang='less'>
body {
  margin: 0px;
  padding: 0px;
}
p {
  display: block;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
#app {
  margin: 0px;
  padding: 0px;
  text-align: center;
}
ul {
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}

.header {
  height: 100px;
  width: 1400px;
  margin: 0 auto;
  background: white;
  .title {
    float: left;
    margin-left: 20px;
    margin-top: 32px;
  }
  ul {
    float: right;
    height: 100px;
    margin-block-start: 0px;
    margin-block-end: 0px;
    padding-inline-start: 0px;
    flex-direction: row;
    justify-content: center;
    margin-right: 10px;
    li {
      list-style: none;
      padding: 0px;
      margin: 0px;
      height: 100px;
      line-height: 100px;
      float: left;
      .box {
        height: 100px;
        display: table-cell;
        vertical-align: middle;
        .select {
          width: 96px;
          height: 40px;
          display: block;
          text-align: center;
          line-height: 40px;
          border: 2px solid #45bd76;
          color: #45bd76;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: rgba(69, 189, 118, 1);
          margin-right: 23px;
          display: block;
        }
        .normal {
          width: 96px;
          height: 40px;
          display: block;
          text-align: center;
          line-height: 40px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          margin-right: 23px;
          color: rgba(40, 40, 40, 1);
        }
      }
    }
  }
}
.footview {
  width: 100%;
  min-width: 1400px;
  background: #212121;
  margin-top: 80px;
  .childfoot {
    width: 1400px;
    height: 350px;
    margin: 0 auto;
    text-align: left;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(143, 143, 143, 1);
    .footview1 {
      float: left;
      margin-top: 53px;
      margin-left: 40px;
      img {
        width: 30px;
        height: 4px;
        margin-top: 0px;
      }
      .foottitle {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
      .footinfofast {
        margin-top: 31px;
      }
      .footinfo {
        margin-top: 12px;
      }
    }
    .footview2 {
      float: left;
      margin-top: 53px;
      margin-left: 97px;
      img {
        width: 30px;
        height: 4px;
        margin-top: 0px;
      }
      .foottitle {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
      .footinfofast {
        margin-top: 31px;
      }
      .footinfo {
        margin-top: 12px;
      }
    }
    .footview3 {
      float: left;
      margin-top: 53px;
      margin-left: 99px;
      img {
        width: 30px;
        height: 4px;
        margin-top: 0px;
      }
      .foottitle {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
      .footinfofast {
        margin-top: 31px;
      }
      .footinfo {
        margin-top: 12px;
      }
    }
    .footview4 {
      float: right;
      margin-top: 49px;
      margin-right: 41px;
      img {
        width: 160px;
        height: 160px;
      }
      p {
        font-size: 18px;
        font-family: Adobe Heiti Std;
        font-weight: normal;
        color: rgba(255, 255, 255, 1);
        margin-top: 10px;
      }
    }
  }
}
.rezheng {
  width: 100%;
  height: 60px;
  min-width: 1400px;
  background: #000000;
  p {
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 60px;
    color: rgba(255, 255, 255, 0.3);
  }
}
</style>
