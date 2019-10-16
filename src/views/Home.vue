<template>
  <!-- <Ohyeah width="100%"
          height="100vh"> -->
  <div class="home-page">
    <header>
      <span class="title">vue-ohyeah-scroll</span>
      <a href="https://www.npmjs.com/package/vue-ohyeah-scroll"
         target="_blank"
         rel="nofollow">
        <img src="https://img.shields.io/npm/v/vue-ohyeah-scroll.svg"
             alt="version">
      </a>
      <a href="https://github.com/javaLuo/vue-ohyeah-scroll"
         target="_blank"
         rel="nofollow">Github</a>

    </header>

    <div class="content-box">
      <div style="width: 960px;margin:0 auto;">默认仿Mac Safari 风格的滚动条</div>
      <!-- 上部 -->
      <div class="content">
        <div class="scroll1-box"
             :style="`width:${width}px;height:${height}px`">
          <ohyeah ref="scroll1"
                  :autoHide="autoHide"
                  :left="leftTop"
                  :top="leftTop"
                  :noVer="noVer"
                  :noHor="noHor"
                  :thumbColor="thumbColor"
                  :trackColor="trackColor"
                  @onVerStart="onVerStart"
                  @onVerEnd="onVerEnd"
                  @onHorStart="onHorStart"
                  @onHorEnd="onHorEnd"
                  @onScroll="onScroll">
            <div class="info-box">
              <h3 id="a1">第一章</h3><br />
              <a href="#a2">锚点:去第二章</a>
              <p v-for="(item,index) in sourceData"
                 :key="index">{{item}}</p>
              <hr />

              <el-input type="textarea"
                        v-model="textareaValue"
                        :rows="2"
                        resize="none"
                        placeholder="文本域中按键不影响滚动条行为">
              </el-input>
              <hr />
              <el-input v-model="inputValue"
                        placeholder="文本框中按键不影响滚动条行为"></el-input>
              <h3 id="a2">第二章</h3><br />
              <a href="#a1">锚点:去第一章</a>
              <p v-for="(item,index) in data"
                 :key="`${index}-${index}`">{{item}}</p>
            </div>
          </ohyeah>
        </div>
        <div>
          <ul>
            <li>offsetHeight:{{dom.offsetHeight}}</li>
            <li>offsetWidth:{{dom.offsetWidth}}</li>
            <li>clientHeight:{{dom.clientHeight}}</li>
            <li>clientWidth:{{dom.clientWidth}}</li>
            <li>scrollHeight:{{dom.scrollHeight}}</li>
            <li>scrollWidth:{{dom.scrollWidth}}</li>
            <li>scrollTop:{{dom.scrollTop}}</li>
            <li>scrollLeft:{{dom.scrollLeft}}</li>
          </ul>
        </div>
        <div class="control-box">
          <button @click="onAdd">+10条</button>
          <button @click="onPlus">-10条</button>
          <button @click="onScrollTo(0,0)">移动到顶部</button>
          <button @click="onScrollTo('end','end')">移动到底部</button>
          <button @click="autoHide=!autoHide">自动隐藏({{autoHide}})</button>
          <button @click="onChangeSize">随机改变容器大小</button>
          <button @click="leftTop=!leftTop">改变位置</button>
          <button @click="noVer=!noVer">禁用垂直({{noVer}})</button>
          <button @click="noHor=!noHor">禁用水平({{noHor}})</button>
          <button @click="onChangeColor">换颜色</button>
          <button @click="onReColor">还原颜色</button>
        </div>
      </div>
      <hr />
      <!-- 下部 -->
      <div style="width: 960px;margin:0 auto;">嵌套</div>
      <div class="content"
           style="border: solid 1px #ccc">

        <ohyeah :autoHide="false"
                width="500px"
                height="300">
          <div class="info-box2">
            <!-- 原生嵌套 -->
            <div style="width: 300px;height: 300px;border:solid 1px #ccc;overflow:auto;margin-right: 10px;">
              <p v-for="(item,index) in sourceData"
                 :key="index">{{item}}</p>
            </div>
            <!-- ohyeah嵌套 -->
            <ohyeah width="300"
                    height="300"
                    :autoHide="false">
              <p v-for="(item,index) in sourceData"
                 :key="index">{{item}}</p>
            </ohyeah>
          </div>
        </ohyeah>
      </div>
    </div>

  </div>
  <!-- </Ohyeah> -->
</template>

<script>
import { Ohyeah } from "vue-ohyeah-scroll";
export default {
  name: "home",
  data() {
    return {
      sourceData: [
        "这条小路一直绵延到视力不能及的高处",
        "从山脚的这个位置向上望去尽看不到天穹",
        "这山不知几千万里",
        "亦不知其尽头何处",
        "此刻，他矗立在山口这条被积雪覆盖的狭窄小道起点",
        "陡峭蜿蜒的台阶是继续前行的唯一道路",
        "风如利刃往身体里嵌，刺骨的凛冽",
        "暴雪如鹅毛般在呼啸声中飞舞，白茫茫一片",
        "山峰好似巨人的脊背，坚硬又严肃",
        "最深沉的孤独和绝望扑面而来",
        "他无法动弹，脚下像穿了一双注铅的铁靴",
        "眼神如结冰的湖面，泪痕就是那冰上的裂隙，寒冷在他血液里乱窜",
        "他就站在那里任凭时间向后飞逝，一点点撕碎自己的脆弱和胆怯，他在自己思想斗争的折磨中等待",
        "他的心智早已在漆黑中破灭",
        "或许终有一天潜意识里的某种力量会迸发出瞬息的淡蓝火星",
        "彼时他将抓住机会迈出第一步。亦或许他始终无法在梦魇中醒来，又陷入更深的梦境",
        "他曾经从寒冰流域逆行而上",
        "穿越那片由冰川统治的白色地狱",
        "他忘记了自己的名字",
        "脸庞如垂死的树皮，僵硬到没有任何表情",
        "这具身体不是他，他只是在控制着这骨骼和血肉筑成的躯干",
        "他需要依附于这肉身上才能得以前进",
        "行走了如此遥远的路程",
        "灵魂怕是早已在贫瘠的冻原中死了千百回",
        "不知他以何种信念为食，竟能抵达这雪山的脚下。"
      ],
      data: [],
      dataIndex: 0,
      noVer: false,
      noHor: false,
      leftTop: false,
      width: 500,
      height: 500,
      autoHide: false,
      dom: {},
      trackColor: undefined,
      thumbColor: undefined,
      textareaValue: "",
      inputValue: ""
    };
  },
  components: {
    Ohyeah
  },
  methods: {
    onAdd() {
      const temp = [];
      for (let i = 0; i < 10; i++) {
        if (this.dataIndex > this.sourceData.length - 1) {
          this.dataIndex = 0;
        }
        temp.push(this.sourceData[this.dataIndex]);
        this.dataIndex += 1;
      }
      this.data = [...this.data, ...temp];
    },
    onPlus() {
      this.data.splice(-10, 10);
      this.data = this.data;
    },

    onChangeColor() {
      this.trackColor = `rgba(${this.random(20, 220)},${this.random(
        20,
        220
      )},${this.random(20, 220)},${Math.random() * 0.5 + 0.5})`;
      this.thumbColor = `rgba(${this.random(20, 220)},${this.random(
        20,
        220
      )},${this.random(20, 220)},${Math.random() * 0.5 + 0.5})`;
    },
    onReColor() {
      this.trackColor = "transparent";
      this.thumbColor = "rgb(127,127,127)";
    },
    onVerStart() {
      this.$message.success({ message: "到顶了", duration: 1000 });
    },
    onVerEnd() {
      this.$message.success({ message: "到底了", duration: 1000 });
    },
    onScroll(obj) {
      this.dom = obj;
    },
    onChangeSize() {
      this.width = Math.random() * 300 + 300;
      this.height = Math.random() * 300 + 300;
    },

    onScrollTo(x, y) {
      this.$refs.scroll1.scrollTo(x, y);
    },
    onHorStart() {
      this.$message.success({ message: "到左了", duration: 1000 });
    },
    onHorEnd() {
      this.$message.success({ message: "到右了", duration: 1000 });
    },
    random(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
  }
};
</script>

<style lang="less">
.home-page {
  header {
    background-color: #222;
    height: 40px;
    display: flex;
    align-items: center;
    color: #fcfcfc;
    padding: 0 20px;
    .title {
      font-style: italic;
      margin-right: 20px;
    }
    a {
      color: rgb(75, 213, 218);
      text-decoration: none;
      transition: color 256ms;
      margin-right: 20px;
      &:hover {
        color: aquamarine;
        text-decoration: underline;
      }
    }
  }
  button {
    padding: 8px 16px;
    border: solid 1px rgb(76, 108, 196);
    border-radius: 4px;
    font-size: 16px;
    background-color: #fff;
    color: rgb(76, 108, 196);
    margin-right: 4px;
    margin-bottom: 4px;
    cursor: pointer;
    outline: none;
    transition: all 256ms;
    &:hover {
      background-color: rgb(76, 108, 196);
      color: #fff;
    }
  }

  p {
    white-space: nowrap;
  }
  .content-box {
    padding: 40px 20px;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    width: 960px;
    margin: 20px auto 0 auto;
    & > div {
      flex: 1;
    }
    .control-box {
      margin-top: 20px;
      flex: none;
      width: 100%;
    }
    .info-box2 {
      display: flex;
      padding: 20px;
      height: 1000px;
      & > div {
        flex: none;
        border: solid 1px #ccc;
      }
    }
  }
  .scroll1-box {
    border: solid 1px #cdcdcd;
    border-radius: 4px;
    flex: none !important;
    .info-box {
      color: #888;
      padding: 20px;

      h3 {
        color: #222;
      }
      a {
        color: rgb(76, 108, 196);
        text-decoration: none;
        &:hover {
          color: rgb(118, 146, 223);
        }
      }
    }
  }
}
</style>