<template>
  <div class="coopercase">
    <div class="imview">
      <el-image class="advimg" fit="cover" :src="banner" />
    </div>

    <div class="pageview">
      <div class="titleclass">
        <span class="welcome">合作案例</span>
      </div>
      <div class="welcome_icon">
        <img style="width:272px;height:23px;" src="http://img.hbnandao.com/static/img/合作.png" />
      </div>

      <div style="margin-top:60px;">
        <div class="zhuanlilist">
          <ul>
            <li v-for="(item,index) in listdate" :key="index">
              <div class="imgae-view" @click="goInfo(index)">
                <el-image :src="item.img[0]" ></el-image>
                <span class="info">{{item.time}}{{item.title}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="pager-bg">
       <el-image src="http://img.hbnandao.com/static/img/背景223.png" ></el-image>
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
          img: [
          'http://img.hbnandao.com/static/img/工程案例/2009年6月北京小营回迁项目/0.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2009年6月北京小营回迁项目/1.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2009年6月北京小营回迁项目/2.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2009年6月北京小营回迁项目/3.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2009年6月北京小营回迁项目/4.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2009年6月北京小营回迁项目/5.jpg',
          ],
          title: "北京小营回迁项目",
          time:"2009年6月"
        },
        {
          img: [
          'http://img.hbnandao.com/static/img/工程案例/2010年6月兰州綦江项目/0.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2010年6月兰州綦江项目/1.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2010年6月兰州綦江项目/2.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2010年6月兰州綦江项目/3.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2010年6月兰州綦江项目/4.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2010年6月兰州綦江项目/5.jpg',
          ],
          title: "兰州綦江项目",
          time:"2010年6月"
        },
        {
          img: [
          'http://img.hbnandao.com/static/img/工程案例/2012年天津东营项目/0.jpeg',
          'http://img.hbnandao.com/static/img/工程案例/2012年天津东营项目/1.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2012年天津东营项目/2.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2012年天津东营项目/3.jpeg',
          'http://img.hbnandao.com/static/img/工程案例/2012年天津东营项目/4.jpeg',
          'http://img.hbnandao.com/static/img/工程案例/2012年天津东营项目/5.jpeg',
          ],
          title: "天津东营项目",
          time:"2012年"
        }
        ,
        {
          img: [
          'http://img.hbnandao.com/static/img/工程案例/2013年6月天津津南项目/0.jpeg',
          'http://img.hbnandao.com/static/img/工程案例/2013年6月天津津南项目/1.jpeg',
          'http://img.hbnandao.com/static/img/工程案例/2013年6月天津津南项目/2.jpeg',
          'http://img.hbnandao.com/static/img/工程案例/2013年6月天津津南项目/3.jpeg',
          'http://img.hbnandao.com/static/img/工程案例/2013年6月天津津南项目/4.jpeg',
          'http://img.hbnandao.com/static/img/工程案例/2013年6月天津津南项目/5.jpeg',
          ],
          title: "天津津南项目",
          time:"2013年6月"
        }
        ,
        {
          img: [
          'http://img.hbnandao.com/static/img/工程案例/2014年5月连云港港溢花园项目/0.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2014年5月连云港港溢花园项目/1.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2014年5月连云港港溢花园项目/2.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2014年5月连云港港溢花园项目/3.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2014年5月连云港港溢花园项目/4.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2014年5月连云港港溢花园项目/5.jpg',
          ],
          title: "连云港港溢花园项目",
          time:"2014年5月"
        }
        ,
        {
          img: [
          'http://img.hbnandao.com/static/img/工程案例/2014年7月张家口东花园项目/0.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2014年7月张家口东花园项目/1.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2014年7月张家口东花园项目/2.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2014年7月张家口东花园项目/3.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2014年7月张家口东花园项目/4.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2014年7月张家口东花园项目/5.jpg',
          ],
          title: "张家口东花园项目",
          time:"2014年7月"
        }
         ,
        {
          img: [
          'http://img.hbnandao.com/static/img/工程案例/2015年5月天津融汇项目/0.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2015年5月天津融汇项目/1.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2015年5月天津融汇项目/2.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2015年5月天津融汇项目/3.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2015年5月天津融汇项目/4.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2015年5月天津融汇项目/5.jpg',
          ],
          title: "天津融汇项目",
          time:"2015年5月"
        }
         ,
        {
          img: [
          'http://img.hbnandao.com/static/img/工程案例/2016年10月天津工业大学项目/0.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2016年10月天津工业大学项目/1.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2016年10月天津工业大学项目/2.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2016年10月天津工业大学项目/3.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2016年10月天津工业大学项目/4.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2016年10月天津工业大学项目/5.jpg',
          ],
          title: "天津工业大学项目",
          time:"2016年10月"
        }
         ,
        {
          img: [
          'http://img.hbnandao.com/static/img/工程案例/2016年12月六盘水地下管廊项目/0.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2016年12月六盘水地下管廊项目/1.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2016年12月六盘水地下管廊项目/2.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2016年12月六盘水地下管廊项目/3.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2016年12月六盘水地下管廊项目/4.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2016年12月六盘水地下管廊项目/5.jpg',
          ],
          title: "六盘水地下管廊项目",
          time:"2016年12月"
        }
        ,
        {
          img: [
          'http://img.hbnandao.com/static/img/工程案例/2017年10月承德兴隆融创成项目/0.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2017年10月承德兴隆融创成项目/1.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2017年10月承德兴隆融创成项目/2.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2017年10月承德兴隆融创成项目/3.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2017年10月承德兴隆融创成项目/4.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2017年10月承德兴隆融创成项目/5.jpg',
          ],
          title: "承德兴隆融创成项目",
          time:"2017年10月"
        }
        ,
        {
          img: [
          'http://img.hbnandao.com/static/img/工程案例/2018年1月包头开元项目/0.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2018年1月包头开元项目/1.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2018年1月包头开元项目/2.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2018年1月包头开元项目/3.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2018年1月包头开元项目/4.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2018年1月包头开元项目/5.jpg',
          ],
          title: "包头开元项目",
          time:"2018年1月"
        }
         ,
        {
          img: [
          'http://img.hbnandao.com/static/img/工程案例/2019年4月天津金茂项目/1.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2019年4月天津金茂项目/2.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2019年4月天津金茂项目/3.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2019年4月天津金茂项目/4.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2019年4月天津金茂项目/5.jpg',
          'http://img.hbnandao.com/static/img/工程案例/2019年4月天津金茂项目/6.jpg',
          ],
          title: "天津金茂项目",
          time:"2019年4月"
        }
      ]
    };
  },
  methods: {
    goInfo(index) {
      this.$router.push({
        path: "/cooperationcaseinfo",
        query: {
          mimg: this.listdate[index].img,
          mtitle: this.listdate[index].title,
          mtime: this.listdate[index].time
        }
      });
    }
  }
};
</script>

<style lang="less">
.coopercase {
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
    height: 1800px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
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
      margin-left: 10px;
      ul li {
        float: left;
        list-style: none;
        margin: 10px;
        .imgae-view{
          width:440px;
          height:360px;
          background:rgba(255,255,255,1);
          box-shadow: 1px 3px 5px 2px rgba(0,0,0,0.1);
          .el-image{
            width: 400px;
            height: 320px;
            margin-top: 20px;
          }
          .info{
            background: rgba(40,40,40,0.8);
            width: 400px;
            font-size:16px;
            height:50px;
            font-family:Hiragino Sans GB;
            font-weight:normal;
            color:rgba(255,255,255,1);
            display:block;
            top:-55px; 
            left: 20px;
            position: relative;
            line-height: 50px;
          }
        }
      }
    }
  }
  .pager-bg{
    position: relative;
    z-index: 1;
    top: -1200px;
    min-width: 1400px;
    width: 100%;
  }
}
</style>