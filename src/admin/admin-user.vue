<template>
  {{ data }}
  <el-input v-model="data.obj.obj2.num"></el-input>
  <el-button @click="add">num++</el-button>
  <el-button @click="add2">obj</el-button>
</template>

<script setup>
import { ref, reactive } from "vue";

const data = reactive({
  obj: {
    obj2: {
      num: 0,
    },
  },
});
const add = () => {
  data.obj.obj2.num++;
};
const add2 = () => {
  // data.obj = {};
};
</script>

<style></style>
