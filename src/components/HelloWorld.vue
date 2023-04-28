<template>
  <v-container>
    <v-row>
      <v-col v-for="menu in random" :key="menu.name" class="text-center">
        {{ menu.name }}
        <v-row v-for="i in 3" :key="i" class="ma-0 pa-0">
          <div
            v-for="a in 3"
            :key="a + 15"
            class="ma-0 pa-0 text-center align-center justify-center"
            style="border: thin solid black; width: 50px; height: 50px"
            :style="styleChange(menu.numList[(i - 1) * 3 + (a - 1)])"
          >
            <span>
              {{ menu.numList[(i - 1) * 3 + (a - 1)] }}
            </span>
          </div>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0 justify-center align-center mt-5">
      {{ bingoList }}
    </v-row>
    <v-row class="ma-0 pa-0 justify-center align-center mt-5">
      {{ selectItem }}
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",

  created: function () {
    this.createRandomNumber();
    this.bingoList = [];
    this.makeRandomNumberList();
  },
  data() {
    return {
      random: [
        {
          name: "판교집",
          numList: [0],
          status: false,
        },
        {
          name: "중국집",
          numList: [0],
          status: false,
        },
        {
          name: "추어탕",
          numList: [0],
          status: false,
        },
        {
          name: "얌샘",
          numList: [0],
          status: false,
        },
        {
          name: "외식",
          numList: [0],
          status: false,
        },
        {
          name: "술",
          numList: [0],
          status: false,
        },
      ],
      bingoList: [0],
      selectItem: "",
    };
  },
  methods: {
    createRandomNumber() {
      for (let i of this.random) {
        i.numList = [];
        for (let j = 0; j < 9; j++) {
          i.numList.push(Math.ceil(Math.random() * 100));
        }
      }
    },
    makeRandomNumberList() {
      for (let i = 0; i < 10000; i++) {
        this.bingoList.push(Math.ceil(Math.random() * 100));
        this.findBingo();
        let s = this.random.map((s) => s.status);
        if (s.includes(true)) {
          this.selectItem =
            this.random.filter((s) => s.status)[0].name + "당첨";
          break;
        }
      }
      console.log(this.random);
    },
    resetRandomNumberList() {
      this.bingoList = [];
      this.selectItem = "";
    },
    styleChange(payload: number) {
      /* eslint-disable */
      return this.bingoList.includes(payload)?"background:red;color:white" : "background:white";
    },
    findBingo(){
      let bingofilter = [...new Set(this.bingoList)]
      for(let j of this.random){
        let status = true;
        for(let i = 0; i<j.numList.length; i++ ){
          if(!bingofilter.includes(j.numList[i])){
            status = false;
            break;
          }
        }
        j.status = status;
      }
    },
  },
});
</script>
