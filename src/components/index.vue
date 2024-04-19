<template>
  <div class="text">
    <div>
      <el-transfer
          v-model="target"
          :data="source">
      </el-transfer>
      <el-card class="box-card" v-if="flag">
        <div slot="header" class="clearfix">
          <span>文本</span>
        </div>
        <div>🌟本周食谱播报员们上线啦，请大家根据当天食谱进行播报，可以利用绘画的方式帮助小朋友进行播报⭐</div>
        <div>上午 下午</div>
        <div v-for="(day,index) in days" :key="index" >
          <span>{{ day }}</span>  <span>{{ target[index * 2] }}</span>  <span>{{ target[index * 2 + 1] }}</span>
        </div>
        <div>ps：大家好，我是今天的食谱播报员xxx，我来自小二班，今天是2024年x月x日星期x，今天的午餐\晚餐是：xxxxx，我的播报完毕，祝大家用餐愉快，谢谢大家（大家也可以根据自己的发挥进行自由改编）</div>
      </el-card>
      <el-button type="primary" @click="generateText">生成</el-button>

    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'TextName',
  data() {
    return {
      names: ["蔡依蓓", "杜晞瑜", "雷皓洋", "李文泰", "梁洛凡", "徐千雅", "胡义林", "海楠", "刘言声", "谯楚新", "张惟源", "孙梦婉", "唐沚舟", "何睿希", "冯含章", "冯于初", "陈熙然", "令狐昊哲", "张康成", "吴雨梵", "杨昕妍", "陈德煊", "赵翊舟", "邓琰", "刘书萁", "苟尚锦", "肖圣译"],
      source: [],
      target: [],
      text: null,
      days: ["周一", "周二", "周三", "周四", "周五"],
      flag: false,
    };
  },
  created() {
    this.getSource();
  },
  methods: {
    getSource() {
      this.names.forEach((item) => {
        this.source.push({
          key: item,
          lable: item
        });
      });
    },
    generateText() {
      console.log(this.target)
      this.flag = true;
    }
  }
}
</script>

<style>
.el-transfer-panel__item .el-checkbox__input {
  display: flex;
  position: absolute;
  top: 8px;
}

</style>