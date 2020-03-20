<template>
  <div class="home">
    <div>
      <el-carousel :interval="5000" arrow="hover">
        <el-carousel-item v-for="url in urls" :key="url">
          <el-image class="advimg" fit="cover" :src="url" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="titleclass">
      <span class="welcome">欢迎来到南岛模板</span>
    </div>
    <div class="welcome_icon">
      <img style="width:255px;height:20px;" src="http://img.hbnandao.com/static/img/welcometonandao.png" />

      <div class="welcome_info">
        <span>河北南岛建筑模板有限公司是集研发、生产、销售、施工、服务于一体的高新技术企业,</span>
        <br />
        <span>也是国内唯一一家历史最悠久技术最专业的塑料模板生产制造企业。</span>
      </div>
    </div>
    <div class="menu">
      <div class="menuiconbg">
        <img class="menuicon" src="http://img.hbnandao.com/static/img/绿色.png" />
        <img class="menuicon" style="margin-left:52px" src="http://img.hbnandao.com/static/img/节能.png" />
        <img class="menuicon" style="margin-left:52px" src="http://img.hbnandao.com/static/img/环保.png" />
        <img class="menuicon" style="margin-left:52px" src="http://img.hbnandao.com/static/img/高效.png" />
      </div>
      <img class="menubg" src="http://img.hbnandao.com/static/img/welcomebg.png" />
    </div>
    <div class="product">
      <span class="productname">欢迎来到南岛模板</span>
      <br />
      <img style="margin-top:15px;" src="http://img.hbnandao.com/static/img/产品介绍.png" />

      <div class="product_info">
        <span>“南岛”合金塑料模板是我公司研发生产的用于建筑行业的新型建筑模板。它是以聚氯乙烯为主要原料，</span>
        <br />
        <span>应用高分子合金技术及现代计算机辅助工程技术，以自研的先进生产设备及工艺生产出来的新型环保建筑材料。</span>
      </div>

      <div class="product_m">
        <!-- 大模板体系  铝合金模板体系  锰合金模板体系  塑料建筑模板 -->
        <!-- <img src="" -->

        <div class="product_imgview">
          <div class="product_imgleftview">
            <div class="product_1">
              <img src="http://img.hbnandao.com/static/img/1.png" />
            </div>

            <div class="product_imgbottomview">
              <div class="product_2">
                <img src="http://img.hbnandao.com/static/img/2.png" />
              </div>
              <div class="product_4">
                <img src="http://img.hbnandao.com/static/img/4.png" />
              </div>
            </div>
          </div>
          <div class="product_imgrightview">
            <div class="product_3">
              <img src="http://img.hbnandao.com/static/img/3.png" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="titleclass">
      <span class="welcome">近期成果</span>
    </div>
    <div class="welcome_icon">
      <img style="width:277px;height:20px;" src="http://img.hbnandao.com/static/img/recent-achievements.png" />
    </div>

    <div class="chengguo">
      <img src="http://img.hbnandao.com/static/img/背景2.png" />
    </div>
    <div class="licheng">
      <img src="http://img.hbnandao.com/static/img/研发历程.png" />
    </div>
    <div class="more">
      <img @click="gofazhan()" src="http://img.hbnandao.com/static/img/按钮.png" />
    </div>

    <div class="titleclass">
      <span class="welcome">行业动态</span>
    </div>
    <div class="welcome_icon">
      <img style="width:240px;height:20px;" src="http://img.hbnandao.com/static/img/industry-dyanmics.png" />
    </div>
    <div style="margin-top:80px;width:100%;">
      <div class="hengye">
        <div class="hengye_left">
          <div style="margin-top:20px;">
            <div class="imgview">
              <img src="http://img.hbnandao.com/static/img/新闻-1.png" />
            </div>
            <div class="tview">
              <p class="title">2019年塑料模板发展趋势</p>
              <p class="info">20190401北京市住房和城乡建设委员会、北京市规划和自然 资源委员会、北京市城市管理委员会联合下发...</p>

              <p class="infobtn" @click="goInfo(0)">详情</p>
            </div>
          </div>

          <div class="imgview">
            <img src="http://img.hbnandao.com/static/img/新闻-3.png" />
          </div>
          <div class="tview">
            <p class="title">2015年塑料模板在建筑业发展趋势分析</p>
            <p class="info">20151106年国家林业局宣布，我国将在2017年全面停止天然林的商业性采伐...</p>

            <p class="infobtn" @click="goInfo(1)">详情</p>
          </div>
        </div>
        <div class="hengye_right">
          <div style="margin-top:20px;">
            <div class="imgview">
              <img src="http://img.hbnandao.com/static/img/新闻-2.png" />
            </div>
            <div class="tview">
              <p class="title">2008年塑料模板发展趋势分析</p>
              <p class="info">长期以来全世界大部分工程建筑要依赖木材，我国因工程建筑所用...</p>

              <p class="infobtn" @click="goInfo(2)">详情</p>
            </div>
          </div>

          <div class="newsview">
            <img src="http://img.hbnandao.com/static/img/新闻-7.png" />
            <img src="http://img.hbnandao.com/static/img/新闻-6.png" />
            <img src="http://img.hbnandao.com/static/img/新闻-5.png" />
            <img src="http://img.hbnandao.com/static/img/新闻-4.png" />
          </div>
        </div>
      </div>
    </div>

    <div class="more-news">
      <img @click="goNews()" src="http://img.hbnandao.com/static/img/更多新闻.png" />
    </div>
    <div style="margin-top:149px;">
      <div class="anli">
        <div class="anli-left">
          <p class="anlititle">以质量求生存，以创新求发展</p>
          <p class="anliinfo">自主研发塑料模板十年载，不断推陈出新，研发更好的绿色、节能、环保、 优质高效的新型产品，为我国建筑模板事业做出更大贡献。</p>

          <div class="countview">
            <div style="float:left;" @click="hezuo()">
              <div style="float:left;">
                <div class="count">10</div>
                <div class="countinfo">合作伙伴</div>
              </div>
              <el-divider style="float:left;" direction="vertical"></el-divider>
            </div>
            <div style="float:left;">
              <div style="float:left;" @click="zhuanli()">
                <div class="count">4</div>
                <div class="countinfo">设计专利</div>
              </div>
              <el-divider style="float:left;" direction="vertical"></el-divider>
            </div>
            <div style="float:left;">
              <div style="float:left;" @click="zhuanli()">
                <div class="count">4</div>
                <div class="countinfo">检测报告</div>
              </div>
            </div>
          </div>
        </div>
        <div class="anli_right">
          <img src="http://img.hbnandao.com/static/img/合作1.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      urls: [
        "http://img.hbnandao.com/static/img/bannernew1.jpg",
        "http://img.hbnandao.com/static/img/banner2.jpg"
      ],
      listdate: [
        {
          day: "01",
          timedate: "2019/04",
          img: "http://img.hbnandao.com/static/img/news2.png",
          title: "2019年塑料模板发展趋势分析",
          name:"韩肖伟",
          info:
            "20190401北京市住房和城乡建设委员会、北京市规划和自然资源委员会、北京市城市管理委员会联合下发 《北京市禁止使用建筑材料目氯（2018年板）》通知。在文件中，有77种建筑材料被禁止使用..."
        },
        {
          day: "06",
          timedate: "2015/11",
          img: "http://img.hbnandao.com/static/img/news1.png",
          title: "2015年塑料模板在建筑业发展趋势分析",
          name:"韩肖伟",
          info:
            "20151106年国家林业局宣布，我国将在2017年全面停止天然林的商业性采伐。国家发展改革委主任徐绍史说， 到2020年，“绿色”将在全国成为一个关键性治国理念。以塑代木，以塑代钢的绿色、节能、环保..."
        },
        {
          day: "28",
          timedate: "2008/08",
          img: "http://img.hbnandao.com/static/img/news3.png",
          title: "2008年塑料模板发展趋势分析",
          name:"韩肖伟",
          info:
            "长期以来全世界大部分工程建筑要依赖木材，我国因工程建筑所用木材据有关数据统计每年要消耗2446万棵大树以 上，对世界而言那就是无可估量的。对环境污染全球变暖和极端气候的产生起了关键作用，给人类造成..."
        }
      ]
    };
  }, methods: {
    goInfo(index) {
      this.$router.push({
        path: "/newsndinfo",
        query: {
          mday: this.listdate[index].day,
          mtimedate: this.listdate[index].timedate,
          mimg: this.listdate[index].img,
          mtitle: this.listdate[index].title,
          minfo: this.listdate[index].info,
          mname: this.listdate[index].name,
        }
      });
    },
    goNews(){
       this.$router.push({
        path: "/newsnd"
      });
    },
    gofazhan(){
      this.$router.push({
        path: "/gond"
      });
    },
    hezuo(){
        this.$router.push({
        path: "/homepartner"
      });
    },
    zhuanli(){
      this.$router.push({
        path: "/homereport"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.home {
  width: 100%;
  text-align: center;
  min-width: 1400px;
  .el-carousel {
    .el-carousel__container {
      width: 100%;
      min-width: 1400px;
      height: 700px;
      text-align: center;
      align: center;
      .advimg {
        width: 100%;
        height: 700px;
        margin: 0 auto;
      }
    }
    .el-carousel__button {
      background: #45bd76;
      height: 6px;
    }
  }
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
  .menu {
    text-align: center;
    margin-top: 80px;
    .menubg {
      width: 100%;
      min-width: 1400px;
      height: 300px;
      z-index: 1;
      position: relative;
      top: -130px;
    }
    .menuiconbg {
      width: 100%;
      min-width: 1400px;
      height: 310px;
      position: relative;
      z-index: 2;
      text-align: center;
      .menuicon {
        width: 280px;
        height: 310px;
      }
    }
  }
  .product {
    width: 100%;
    margin-top: -52px;
    text-align: center;
    .productname {
      font-size: 40px;
      font-family: Hiragino Sans GB;
      font-weight: normal;
      color: rgba(40, 40, 40, 1);
    }
    .product_info {
      font-size: 14px;
      margin-top: 49px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(40, 40, 40, 1);
      margin-bottom: 80px;
    }
    .product_m {
      width: 1400px;
      height: 600px;
      margin: 0 auto;
      background: rgba(245, 245, 245, 1);
      .product_imgview {
        width: 1180px;
        position: relative;
        height: 570px;
        top: 20px;
        margin: 0 auto;
        .product_imgleftview {
          width: 50%;
          height: 100%;
          float: left;
          .product_1 {
            height: 50%;
            img {
              float: left;
              width: 100%;
              height: 100%;
            }
          }
          .product_imgbottomview {
            width: 100%;
            height: 50%;
            .product_2 {
              float: left;
              height: 100%;
              width: 50%;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .product_4 {
              float: right;
              height: 100%;
              width: 50%;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
        .product_imgrightview {
          width: 50%;
          height: 100%;
          float: right;
          .product_4 {
            float: right;
            height: 100%;
            width: 100%;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
  .chengguo {
    width: 1400px;
    height: 254px;
    margin: 0 auto;
    padding-top: 115px;
    img {
      width: 100%;
      height: 254px;
    }
  }
  .licheng {
    width: 1400px;
    height: 110px;
    margin: 0 auto;
    padding-top: 84px;
    img {
      width: calc(100% - 80px);
      height: 110px;
    }
  }
  .more {
    padding-top: 54px;
    img {
      width: 240px;
      height: 40px;
    }
  }
  .hengye {
    width: 1400px;
    height: 460px;
    background: #f5f5f5;
    margin: 0 auto;
    .hengye_left {
      width: 46%;
      height: 100%;
      float: left;
      .imgview {
        float: left;
        width: 240px;
        margin-top: 20px;
        img {
          width: 220px;
          height: 180px;
          margin-left: 20px;
          float: left;
        }
      }
      .tview {
        position: relative;
        width: 377px;
        height: 180px;
        margin-left: 21px;
        float: left;
        margin-top: 20px;
        text-align: left;
        .title {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(40, 40, 40, 1);
          margin-top: 9px;
        }
        .info {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          margin-top: 20px;
          color: rgba(118, 118, 118, 1);
        }

        .infobtn {
          width: 100px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          background: rgba(69, 189, 118, 0);
          border: 2px solid rgba(69, 189, 118, 1);
          opacity: 0.39;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(69, 189, 118, 1);
          margin-top: 44px;
        }
      }
    }
    .hengye_right {
      width: 54%;
      height: 100%;
      float: right;
      .imgview {
        float: left;
        width: 240px;
        margin-top: 20px;
        img {
          width: 220px;
          height: 180px;
          margin-left: 20px;
          float: left;
        }
      }
      .tview {
        position: relative;
        width: 377px;
        height: 180px;
        margin-left: 21px;
        float: left;
        margin-top: 20px;
        text-align: left;
        .title {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(40, 40, 40, 1);
          margin-top: 9px;
        }
        .info {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          margin-top: 20px;
          color: rgba(118, 118, 118, 1);
        }

        .infobtn {
          width: 100px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          background: rgba(69, 189, 118, 0);
          border: 2px solid rgba(69, 189, 118, 1);
          opacity: 0.39;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(69, 189, 118, 1);
          margin-top: 44px;
        }
      }
      .newsview {
        text-align: left;
        margin-left: 10px;
        img {
          margin-top: 20px;
          width: 160px;
          height: 180px;
          margin-left: 10px;
        }
      }
    }
  }
  .more-news {
    margin-top: 40px;
    img {
      width: 400px;
      height: 50px;
    }
  }
  .anli {
    width: 1400px;
    height: 460px;
    background: #f5f5f5;
    margin: 0 auto;
    .anli-left {
      width: 50%;
      height: 100%;
      float: left;
      p {
        width: 452px;
        text-align: left;
        margin-left: 100px;
      }
      .anlititle {
        font-size: 24px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: rgba(40, 40, 40, 1);
        margin-top: 77px;
      }
      .anliinfo {
        margin-top: 37px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(40, 40, 40, 1);
      }
      .countview {
        margin-left: 133px;
        margin-top: 88px;
        .count {
          font-size: 50px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(40, 40, 40, 1);
        }
        .countinfo {
          font-size: 18px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #404040;
          margin-top: 10px;
        }
        .el-divider {
          margin-top: 23px;
          height: 40px;
          width: 2px;
          background: #cccccc;
          margin-left: 63px;
          margin-right: 65px;
        }
      }
    }
    .anli-right {
      width: 50%;
      height: 100%;
      float: left;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  
}
</style>
