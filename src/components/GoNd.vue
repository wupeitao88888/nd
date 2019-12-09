<template>
  <div class="gond">
    <div class="imview">
      <el-image class="advimg" fit="cover" :src="banner" />
    </div>

    <div class="pageview">
      <div class="titleclass">
        <span class="welcome">企业简介</span>
      </div>
      <div class="welcome_icon">
        <img style="width:236px;height:20px;" src="http://img.hbnandao.com/static/img/gonandao.png" />
      </div>

      <div style="margin-left:70px;margin-top:60px;">
        <div class="zhuanlilist">
          <ul>
            <li>
              <img src="http://img.hbnandao.com/static/img/gonandao3.png" />
            </li>
            <li>
              <div class="company">
                <p class="title">河北南岛建筑模版有限公司<img style="width:15px;height:15px;position:relative;top:-10px;left:3px;" src="http://img.hbnandao.com/static/img/配饰.png" /></p>
                <p
                  class="info"
                  style="margin-top:5dp;"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;集研发、生产、销售、施工、服务于一体的高新技术企业，也是国内唯一一家历史最悠久技术最专业的塑料模版生产制造公司。自2000年开始自行研发塑料模版，历时八年，终于研制成功了第七代塑料建筑模版“合金塑料模版”。在通过工程施工用七年时间完成了模版体系，使整体工程不在使用木材变成了现实，也实现了三高、两低、一节约：高效率、高质量、高回报、低造价、低风险、节约木材。</p>
                <br />
                <p
                  class="info"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司注重员工队伍的建设，拥有一支以高级工程师为首的专业技术队伍，并获得数所高校的技术支援，公司以“诚信、务实、合作、创新、发展”为基本宗旨，塑造鲜明独特的企业形象，坚持以人为本，倡导凝聚人心的企业精神创造未来。</p>
              </div>
            </li>
            <li>
              <div class="company2">
                <p
                  class="info"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司生产的塑料模版属于国家大力提倡的“节能环保，低碳经济”的专利产品，主要应用于建筑工程、水利和水电建筑工程、桥梁及隧道工程等， 实现了以塑代木，以塑代竹。公司本着“以质量求生存，以创新求发展”的经营理念，将继续发扬“求实创新，锐意进取”的精神，不断推陈出新，研发更好的绿色、节能、环保、优质高效的新型产品，为我国建筑模版事业做出更大贡献。</p>
                <br />
                <p
                  class="info"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用绿色节能环保“南岛”模版，还地球一片绿色环境；让我们携手共同发展，为绿色施工、绿色建筑、保护生态环境做贡献。</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="endview">
      <div class="bg">
        <div class="look">
          <div class="title" style="margin-top: 60px;">
            <span class="welcome">研发里程碑</span>
          </div>
          <div class="welcome_icon">
            <img style="width:160px;height:18px;" src="http://img.hbnandao.com/static/img/gonandaomore.png" />
          </div>
          <div>
            <button class="lookinfo" @click="goHistory()">查看详情</button>
          </div>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="lookright">
          <img src="http://img.hbnandao.com/static/img/gonandao2.png" />
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
.gond {
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
    height: 750px;
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
      ul li {
        float: left;
        margin-left: 19px;
        list-style: none;
        margin-top: 20px;
        img {
          width: 520px;
          height: 340px;
        }
        .company {
          width: 600px;
          height: 340px;
          text-align: left;
          .title {
            font-size: 24px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(40, 40, 40, 1);
            line-height: 64px;
          }
          .info {
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(40, 40, 40, 1);
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(40, 40, 40, 1);
            line-height: 28px;
          }
        }
        .company2 {
          width: 1150px;
          height: 200px;
          text-align: left;
          .title {
            font-size: 24px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(40, 40, 40, 1);
            line-height: 64px;
          }
          .info {
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(40, 40, 40, 1);
            line-height: 28px;
          }
        }
      }
    }
  }
  .endview {
    width: 100%;
    min-width: 1400px;
    background: rgba(69, 189, 118, 0.03);
    height: 232px;
    background: url("http://img.hbnandao.com/static/img/21313_10.png") no-repeat 2px 2px;
    background-size: cover;
    .bg {
      width: 1400px;
      height: 100%;
      margin: 0 auto;
      .look {
        width: 49%;
        height: 100%;
        float: left;
        .title {
          height: 40px;
          .welcome {
            font-size: 32px;
            font-family: Hiragino Sans GB;
            font-weight: normal;
            color: rgba(40, 40, 40, 1);
          }
        }
        .welcome_icon {
          margin-top: 15px;
          .welcome_info {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(40, 40, 40, 1);
          }
        }
        .lookinfo {
          width: 100px;
          height: 30px;
          background: rgba(69, 189, 118, 1);
          border-radius: 4px;
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
          border: 1px solid transparent; //自定义边框
          outline: none;
          margin-top: 20px;
        }
      }
      .el-divider {
        float: left;
        width: 2px;
        height: 60px;
        background: rgba(40, 40, 40, 0.3);
        border-radius: 1px;
        margin-top: 86px;
      }
      .lookright {
        width: 49%;
        height: 100%;
        float: left;
        text-align: right;
        img {
          width: 380px;
          margin-top: 16px;
          height: 200px;
          margin-right: 100px;
        }
      }
    }
  }
}
</style>