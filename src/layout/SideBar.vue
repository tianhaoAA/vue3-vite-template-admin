<template>
  <el-aside :width="isCollapse ? '65px' : '250px'">
    <div class="aside-header">
      <div class="logo">
        <div v-if="!isCollapse" class="normal">admin</div>
        <div v-else class="mini">admin</div>
      </div>
      <div style="flex: auto; overflow-y: auto">
        <el-scrollbar height="100%">
          <el-menu
            class="el-menu-vertical"
            :collapse="isCollapse"
            :router="true"
            background-color="#263238"
            text-color="#afb5bd"
            :collapse-transition="false"
            active-text-color="#ffffff"
          >
            <SidBarItem
              v-for="item in menuItems"
              :item="item"
              :key="item.id"
            ></SidBarItem>
          </el-menu>
        </el-scrollbar>
      </div>
    </div>
  </el-aside>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import SidBarItem from "./SidBarItem.vue";
import { myMenu } from "@/api/menu";
defineProps({
  isCollapse: {
    type: Boolean,
    default: false,
  },
});
let menuItems = ref([]);
myMenu().then((response) => {
  menuItems.value = response.data.data;
  console.log(menuItems.value);
});
</script>

<style lang="scss" scoped>
.el-menu-vertical {
  height: 100%;
  border-right: 0;
}
.aside-header {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #263238;
  border-right: 1px solid #e6e6e6;
}
.logo {
  height: 60px;
  display: flex;
  line-height: 60px;
  color: #42b983;
  width: 100%;
  .normal {
    padding-left: 20px;
  }
  .mini {
    width: 100%;
    text-align: center;
  }
}
</style>
