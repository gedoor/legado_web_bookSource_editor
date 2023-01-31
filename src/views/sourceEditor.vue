<template>
  <div class="left">
    <div>
      <ul>
        <li
          v-for="[key, value] in Object.entries(config)"
          @click="changeSelectTabKey(key)"
          :key="key"
          :class="key === selectTabKey ? 'active' : ''"
        >
          {{ value.name }}
        </li>
      </ul>
    </div>
    <edit-input-list :data="currentTabData"></edit-input-list>
  </div>
  <edit-menu></edit-menu>
  <edit-out></edit-out>
</template>
<script>
import { onMounted, reactive, toRefs, computed } from "vue";
import editMenu from "@/components/editMenu";
import editOut from "@/components/editOut";
import editInputList from "@/components/editInputList";
import bookSourceConfig from "@/utils/bookSourceEditConfig.js";
import rssSourceConfig from "@/utils/rssSourceEditConfig.js";

export default {
  components: {
    editMenu,
    editOut,
    editInputList,
  },
  setup() {
    const data = reactive({
      config: {},
      selectTabKey: "base",
    });

    if (/bookSource/.test(location.href)) {
      data.config = bookSourceConfig;
      document.title = "书源编辑";
    } else {
      data.config = rssSourceConfig;
      document.title = "订阅源编辑";
    }

    const changeSelectTabKey = (key) => (data.selectTabKey = key);

    const currentTabData = computed(() => {
      return data.config[data.selectTabKey].children;
    });

    onMounted(() => {});

    return {
      ...toRefs(data),
      changeSelectTabKey,
      currentTabData,
    };
  },
};
</script>
<style lang="scss">
a {
  text-decoration: none;
  color: #333;
}

ul,
body {
  margin: 0;
  padding: 0;
}

ul {
  width: 100%;
  height: 40px;
  display: flex;

  li {
    display: block;
    text-align: center;
    line-height: 40px;
    width: 16%;
    list-style: none;
    cursor: pointer;

    &:hover {
      color: red;
    }
  }
}

.active {
  color: #fff !important;
  background-color: #80808075;
  border-bottom: unset !important;
}
</style>
<style lang="scss" scoped>
ul li {
  border-bottom: #333333 2px solid;
}

a {
  font-size: 18px;
  color: blue;
}
</style>
