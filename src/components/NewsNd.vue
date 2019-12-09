<template>
  <div class="newsNd">
    <div class="imview">
      <el-image class="advimg" fit="cover" :src="banner" />
    </div>

    <div class="pageview">
      <div class="titleclass">
        <span class="welcome">新闻资讯</span>
      </div>
      <div class="welcome_icon">
        <img style="width:160px;height:22px;" src="http://img.hbnandao.com/static/img/新闻.png" />
      </div>

      <div style="margin-left:70px;margin-top:60px;">
        <div class="zhuanlilist">
          <ul>
            <li v-for="(item,index) in listdate" :key="index">
              <div class="timedate">
                <div class="time_day">{{item.day}}</div>
                <div class="time_date">{{item.timedate}}</div>
              </div>
              <div class="newsinfo">
                <div class="newsimgdiv">
                  <img :src="item.img" alt />
                </div>
                <div class="newsDes">
                  <p class="des_title">{{item.title}}</p>
                  <p class="des_info">{{item.info}}</p>
                  <button class="des_info_btn" @click="goInfo(index)">详情</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsNd",
  data: function() {
    return {
      banner: "http://img.hbnandao.com/static/img/二级页banner.png",
      bannerbg: "http://img.hbnandao.com/static/img/welcomebg.png",
      listdate: [
        {
          day: "01",
          timedate: "2019/04",
          img: "http://img.hbnandao.com/static/img/news2.png",
          title: "2019年塑料模版发展趋势分析",
          name:"韩肖伟",
          info:
            "20190401北京市住房和城乡建设委员会、北京市规划和自然资源委员会、北京市城市管理委员会联合下发 《北京市禁止使用建筑材料目录（2018年版）》通知。在文件中，有77种建筑材料被禁止使用..."
        },
        {
          day: "06",
          timedate: "2015/11",
          img: "http://img.hbnandao.com/static/img/news1.png",
          title: "2015年塑料模版在建筑业发展趋势分析",
          name:"韩肖伟",
          info:
            "20151106年国家林业局宣布，我国将在2017年全面停止天然林的商业性采伐。国家发展改革委主任徐绍史说， 到2020年，“绿色”将在全国成为一个关键性治国理念。以塑代木，以塑代钢的绿色、节能、环保..."
        },
        {
          day: "28",
          timedate: "2008/08",
          img: "http://img.hbnandao.com/static/img/news3.png",
          title: "2008年塑料模版发展趋势分析",
          name:"韩肖伟",
          info:
            "长期以来全世界大部分工程建筑要依赖木材，我国因工程建筑所用木材据有关数据统计每年要消耗2446万棵大树以 上，对世界而言那就是无可估量的。对环境污染全球变暖和极端气候的产生起了关键作用，给人类造成..."
        }
      ]
    };
  },
  methods: {
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
    }
  }
};
</script>

<style lang="less">
.newsNd {
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
      height: 1400px;
      margin: 0 auto;
      ul li {
        float: left;
        margin-left: 59px;
        list-style: none;
        margin-top: 20px;
        .timedate {
          float: left;
          .time_day {
            width: 120px;
            height: 80px;
            line-height: 80px;
            font-size: 40px;
            font-family: FZZhengHeiS-DB-GB;
            font-weight: 400;
            color: rgba(69, 189, 118, 1);
            background: #f5f5f5;
          }
          .time_date {
            width: 120px;
            height: 30px;
            line-height: 30px;
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(69, 189, 118, 1);
            margin-top: 1px;
            background: #f5f5f5;
          }
        }
        .newsinfo {
          float: left;
          margin-left: 40px;
          .newsimgdiv {
            float: left;
            img {
              width: 260px;
              height: 200px;
            }
          }
          .newsDes {
            text-align: left;
            margin-left: 289px;
            width: 658px;
            .des_title {
              font-size: 24px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: rgba(40, 40, 40, 1);
            }
            .des_info {
              font-size: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: rgba(118, 118, 118, 1);
              margin-top: 28px;
            }
            .des_info_btn {
              width: 120px;
              height: 40px;
              background: rgba(69, 189, 118, 0);
              border: 2px solid rgba(69, 189, 118, 1);
              opacity: 0.39;
              font-size: 16px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: rgba(69, 189, 118, 1);
              margin-top: 30px;
            }
          }
        }
      }
    }
  }
}
</style>