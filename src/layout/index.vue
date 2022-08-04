<template>
  <el-container style="height: 100%">
    <SideBar :isCollapse="isCollapse" />
    <el-container direction="vertical">
      <Header :isCollapse="isCollapse" @switchMenu="switchMenu"></Header>
      <el-main class="main-container">
        <router-view v-slot="{ Component }">
          <el-scrollbar height="100%">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </el-scrollbar>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import SideBar from "./SideBar.vue";
import Header from "./Header.vue";

const isCollapse = ref(false);

const switchMenu = () => {
  isCollapse.value = !isCollapse.value;
};
</script>

<style lang="scss" scoped>
.el-main {
  padding: 0;
}
</style>
