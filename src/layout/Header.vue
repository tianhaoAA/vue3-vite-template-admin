<template>
  <el-header>
    <el-row>
      <el-col :span="1">
        <el-icon @click="menuOpenOrClose" class="open-menu">
          <expand v-if="isCollapse" />
          <fold v-if="!isCollapse" />
        </el-icon>
      </el-col>
      <el-col :span="15"></el-col>
      <el-col :span="8"></el-col>
    </el-row>
  </el-header>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  isCollapse: Boolean,
});
const emit = defineEmits(["switchMenu"]);

const msg = ref("222");

const menuOpenOrClose = () => {
  emit("switchMenu");
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-header {
  border-bottom: 1px solid #e6e6e6;
  height: 60px;
  line-height: 60px;
}
.el-button {
  border: none;
}

.open-menu {
  cursor: pointer;
}
.el-breadcrumb {
  line-height: 60px;
}
a {
  text-decoration: none;
}
</style>
