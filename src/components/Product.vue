<template>
  <div class="product">
    <div class="imview">
      <el-image
        class="advimg"
        fit="cover"
        :src="banner"
      />
    </div>

    <div class="titleclass">
      <span class="welcome">产品展示</span>
    </div>
    <div class="welcome_icon">
      <img style="width:212px;height:20px;" src="http://img.hbnandao.com/static/img/产品介绍.png" />

      <div class="welcome_info">
        <span>“南岛”合金塑料模板是我公司研发生产的用于建筑行业的新型建筑模板。它是以聚氯乙烯为主要原料</span>
        <br />
        <span>应用高分子合金技术及现代计算机辅助工程技术，以自研的先进生产设备及工艺生产出来的新型环保建筑材料。</span>
      </div>
    </div>

    <div style="margin-top:80px;">
      <div class="change">
        <img v-show="show1" :src="type1" />
        <img v-show="show2" :src="type2" />
        <img v-show="show3" :src="type3" />
        <img v-show="show4" :src="type4" />
      </div>
    </div>

    <div class="btns">
      <img @click="big1()" :src="btn1" />
      <img @click="big2()" :src="btn2" />
      <img @click="big3()" :src="btn3" />
      <img @click="big4()" :src="btn4" />
    </div>

    <div style="margin-top:80px;">
      <div class="table">
        <img class="title" src="http://img.hbnandao.com/static/img/%E6%A8%A1%E7%89%88%E6%80%A7%E8%83%BD.png" />
        <div style="margin-top:33px;">
          <div class="tabletitle">
            <ul>
              <li>
                <div class="tabletitleitem">性能</div>
              </li>
              <li>
                <div class="tabletitleitem">南岛模板体系</div>
              </li>
              <li>
                <div class="tabletitleitem">铝合金模板体系</div>
              </li>
              <li>
                <div class="tabletitleitem">传统木模板体系</div>
              </li>
            </ul>
          </div>
        </div>
        <div style="margin-top:1px;">
          <div class="tablestyle1">
            <ul>
              <li>
                <div class="tabletitleitem">周转次数</div>
              </li>
              <li>
                <div class="tabletitleitem">&gt;100</div>
              </li>
              <li>
                <div class="tabletitleitem">&gt;100</div>
              </li>
              <li>
                <div class="tabletitleitem">&lt;7</div>
              </li>
            </ul>
          </div>
        </div>
        <div style="margin-top:1px;">
          <div class="tablestyle2">
            <ul>
              <li>
                <div class="tabletitleitem">可回收性</div>
              </li>
              <li>
                <div class="tabletitleitem">可回收</div>
              </li>
              <li>
                <div class="tabletitleitem">可回收</div>
              </li>
              <li>
                <div class="tabletitleitem">不可回收</div>
              </li>
            </ul>
          </div>
        </div>
        <div style="margin-top:1px;">
          <div class="tablestyle1">
            <ul>
              <li>
                <div class="tabletitleitem">施工进度</div>
              </li>
              <li>
                <div class="tabletitleitem">快</div>
              </li>
              <li>
                <div class="tabletitleitem">快</div>
              </li>
              <li>
                <div class="tabletitleitem">慢</div>
              </li>
            </ul>
          </div>
        </div>
        <div style="margin-top:1px;">
          <div class="tablestyle2">
            <ul>
              <li>
                <div class="tabletitleitem">墙体污染</div>
              </li>
              <li>
                <div class="tabletitleitem">无</div>
              </li>
              <li>
                <div class="tabletitleitem">有</div>
              </li>
              <li>
                <div class="tabletitleitem">无</div>
              </li>
            </ul>
          </div>
        </div>
         <div style="margin-top:1px;">
          <div class="tablestyle1">
            <ul>
              <li>
                <div class="tabletitleitem">施工质量</div>
              </li>
              <li>
                <div class="tabletitleitem">高</div>
              </li>
              <li>
                <div class="tabletitleitem">高</div>
              </li>
              <li>
                <div class="tabletitleitem">差</div>
              </li>
            </ul>
          </div>
        </div>
        <div style="margin-top:1px;">
          <div class="tablestyle2">
            <ul>
              <li>
                <div class="tabletitleitem">耐酸碱、腐蚀性</div>
              </li>
              <li>
                <div class="tabletitleitem">优良</div>
              </li>
              <li>
                <div class="tabletitleitem">差</div>
              </li>
              <li>
                <div class="tabletitleitem">差</div>
              </li>
            </ul>
          </div>
        </div>
          <div style="margin-top:1px;">
          <div class="tablestyle1">
            <ul>
              <li>
                <div class="tabletitleitem">综合成本</div>
              </li>
              <li>
                <div class="tabletitleitem">低</div>
              </li>
              <li>
                <div class="tabletitleitem">高</div>
              </li>
              <li>
                <div class="tabletitleitem">高</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  data: function() {
    return {
      btn1: "http://img.hbnandao.com/static/img/按钮_12.png",
      btn2: "http://img.hbnandao.com/static/img/按钮_03.png",
      btn3: "http://img.hbnandao.com/static/img/按钮_05.png",
      btn4: "http://img.hbnandao.com/static/img/按钮_07.png",
      type1: "http://img.hbnandao.com/static/img/%E5%A4%A7%E6%A8%A1%E7%89%88%E4%BD%93%E7%B3%BB.png",
      type2: "http://img.hbnandao.com/static/img/铝合金模板体系.png",
      type3: "http://img.hbnandao.com/static/img/锰合金模板体系.png",
      type4: "http://img.hbnandao.com/static/img/塑料建筑模板.png",
      show1:true,
      show2:false,
      show3:false,
      show4:false,
      banner: 'http://img.hbnandao.com/static/img/二级页banner.png'
    };
  },
  methods: {
    big1() {
      this.$data.btn1 = "http://img.hbnandao.com/static/img/按钮_12.png";
      this.$data.btn2 = "http://img.hbnandao.com/static/img/按钮_03.png";
      this.$data.btn3 = "http://img.hbnandao.com/static/img/按钮_05.png";
      this.$data.btn4 = "http://img.hbnandao.com/static/img/按钮_07.png";
      // this.$data.type1 = "http://img.hbnandao.com/static/img/%E5%A4%A7%E6%A8%A1%E7%89%88%E4%BD%93%E7%B3%BB.png";
      this.show1=true;
      this.show2=false;
      this.show3=false;
      this.show4=false;
    },
    big2() {
      this.$data.btn1 = "http://img.hbnandao.com/static/img/按钮_01.png";
      this.$data.btn2 = "http://img.hbnandao.com/static/img/按钮_13.png";
      this.$data.btn3 = "http://img.hbnandao.com/static/img/按钮_05.png";
      this.$data.btn4 = "http://img.hbnandao.com/static/img/按钮_07.png";
      // this.$data.type2 = "http://img.hbnandao.com/static/img/铝合金模板体系.png";
      this.show1=false;
      this.show2=true;
      this.show3=false;
      this.show4=false;
    },
    big3() {
      this.$data.btn1 = "http://img.hbnandao.com/static/img/按钮_01.png";
      this.$data.btn2 = "http://img.hbnandao.com/static/img/按钮_03.png";
      this.$data.btn3 = "http://img.hbnandao.com/static/img/按钮_14.png";
      this.$data.btn4 = "http://img.hbnandao.com/static/img/按钮_07.png";
      // this.$data.type1 = "http://img.hbnandao.com/static/img/锰合金模板体系.png";
      this.show1=false;
      this.show2=false;
      this.show3=true;
      this.show4=false;
    },
    big4() {
      this.$data.btn1 = "http://img.hbnandao.com/static/img/按钮_01.png";
      this.$data.btn2 = "http://img.hbnandao.com/static/img/按钮_03.png";
      this.$data.btn3 = "http://img.hbnandao.com/static/img/按钮_05.png";
      this.$data.btn4 = "http://img.hbnandao.com/static/img/按钮_15.png";
      // this.$data.type1 = "http://img.hbnandao.com/static/img/塑料建筑模板.png";
      this.show1=false;
      this.show2=false;
      this.show3=false;
      this.show4=true;
    }
  }
};
</script>

<style lang="less">
.product {
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
  .titleclass {
    width: 100%;
    min-width: 1400px;
    text-align: center;
    margin-top: 80px;
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
      margin-top: 49px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(40, 40, 40, 1);
    }
  }
  .change {
    margin: 0 auto;
    width: 1400px;
    img {
      width: 1100px;
      margin-left: 150px;
    }
  }
  .btns {
    width: 100%;
    margin-top: 61px;
    img {
      margin-right: 20px;
    }
  }
  .table {
    width: 1400px;
    height: 460px;
    margin: 0 auto;
    background: #f5f5f5;
    .title {
      margin-top: 31px;
    }
    .tabletitle {
      width: 1284px;
      height: 40px;
      margin: 0 auto;
      ul li {
        list-style: none;
        padding: 0px;
        margin: 0px;
        float: left;
        .tabletitleitem {
          width: 320px;
          height: 40px;
          background: #4ab977;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 40px;
          margin-left: 1px;
        }
      }
    }
    .tablestyle1 {
      width: 1284px;
      height: 40px;
      margin: 0 auto;
      ul li {
        list-style: none;
        padding: 0px;
        margin: 0px;
        float: left;
        .tabletitleitem {
          width: 320px;
          height: 40px;
          background: rgba(69, 189, 118, 0.2);
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          line-height: 40px;
          margin-left: 1px;
        }
      }
    }
    .tablestyle2 {
      width: 1284px;
      height: 40px;
      margin: 0 auto;
      ul li {
        list-style: none;
        padding: 0px;
        margin: 0px;
        float: left;
        .tabletitleitem {
          width: 320px;
          height: 40px;
          background: rgba(255, 255, 255, 1);
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          line-height: 40px;
          margin-left: 1px;
        }
      }
    }
  }
}
</style>