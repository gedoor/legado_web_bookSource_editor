<template>
  <el-tabs v-model="current_tab">
    <el-tab-pane
      v-for="(tab, index) in tabData"
      :key="tab[0]"
      :name="tab[0]"
      :label="tab[1]"
    >
      <edit-tab v-if="index == 0" />
      <edit-debug v-if="index == 1" />
      <edit-list v-if="index == 2" />
      <edit-help v-if="index == 3" />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { useSourceStore } from "@/store";

const store = useSourceStore();

const { currentTab: current_tab } = storeToRefs(store);

const tabData = ref([
  ["editTab", "编辑源"],
  ["editDebug", "调试源"],
  ["editList", "源列表"],
  ["editHelp", "帮助信息"],
]);
</script>

<style lang="scss" scoped></style>
