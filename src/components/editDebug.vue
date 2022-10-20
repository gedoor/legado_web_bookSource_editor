<template>
  <input
    type="text"
    style="text-align: center; border: 1px solid #dddddd; border-radius: 4px"
    placeholder="输入搜索关键字，默认搜「我的」"
    v-model="searchKey"
    @input="changeSearch(searchKey)"
    @keydown.enter="startSearch"
    title="输入关键词 enter(回车键)快捷搜索"
    v-if="isBookSource"
  />
  <textarea
    placeholder="这里用于输出调试信息"
    v-model="printDebug"
    ref="textareaDom"
    id="debug_text"
  ></textarea>
</template>

<script>
import { reactive, ref, toRefs, watchEffect, computed } from "vue";
import store from "@/store";

export default {
  name: "editDebug",
  setup() {
    const textareaDom = ref("");
    const data = reactive({
      printDebug: store.state.deBugMsg,
      searchKey: "",
    });
    const changeSearch = (key) => {
      store.commit("changeSearchKey", key);
    };
    watchEffect(() => {
      data.printDebug = store.state.deBugMsg;
    });
    const startSearch = () => {
      document.querySelectorAll(".menu>button")[7].click();
    };
    const isBookSource = computed(() => {
      return /bookSource/.test(window.location.href);
    });
    return {
      ...toRefs(data),
      textareaDom,
      changeSearch,
      startSearch,
      isBookSource,
    };
  },
};
</script>

<style lang="scss" scoped>
input {
  outline: none;
  height: 25px;
  font-size: 16px;
}
textarea {
  font-size: 14px;
}
</style>
