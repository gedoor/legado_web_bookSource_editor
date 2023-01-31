import { createStore } from "vuex";

export default createStore({
  state: {
    url: localStorage.getItem("url") || "",
    bookSources: [], // 临时存放所有书源,
    rssSources: [], // 临时存放所有订阅源
    currentSource: {}, // 当前编辑的源
    currentTab: localStorage.getItem("tabName") || "editTab",
    editTabSource: {}, // 生成序列化的json数据
    deBugMsg: "",
    searchKey: "",
  },
  getters: {
    sources(state) {
      return /bookSource/.test(location.href)
        ? state.bookSources
        : state.rssSources;
    },
  },
  mutations: {
    changeSearchKey(state, key) {
      state.searchKey = key;
    },

    //拉取源后保存
    saveSources(state, data) {
      if (/bookSource/.test(location.href)) {
        state.bookSources = data;
      } else {
        state.rssSources = data;
      }
    },
    //删除源
    deleteSources(state, data) {
      let sources = /bookSource/.test(location.href)
        ? state.bookSources
        : state.rssSources;
      data.forEach((source) => {
        let index = sources.indexOf(source);
        if (index > -1) sources.splice(index, 1);
      });
    },
    //保存当前编辑源
    saveCurrentSource(state) {
      let source = state.currentSource,
        sources,
        searchKey;
      if (/bookSource/.test(location.href)) {
        sources = state.bookSources;
        searchKey = "bookSourceUrl";
      } else {
        sources = state.rssSources;
        searchKey = "sourceUrl";
      }
      let index = sources.findIndex(
        (element) => element[searchKey] === source[searchKey]
      );
      //去掉响应 toRaw?
      source = JSON.parse(JSON.stringify(source));
      if (index > -1) {
        sources.splice(index, 1, source);
      } else {
        sources.push(source);
      }
    },
    // 更改当前编辑的源
    changeCurrentSource(state, source) {
      const newContent = JSON.stringify(source);
      state.currentSource = JSON.parse(newContent);
    },
    // 修改当前源的某一个值
    changeCurrentSourceValue(state, data) {
      let value = data.value;
      let convertor = {
        true: true,
        false: false,
      };
      if (data.type === "Boolean") value = convertor[value];
      if (data.type === "Number") value = Number(value);

      if (data.key.includes("_")) {
        let rule1 = data.key.split("_")[0],
          rule2 = data.key.split("_")[1],
          obj = {};
        obj[rule2] = value;
        //state.currentSource[rule1] is Object, use `Object.assign` to override value
        state.currentSource[rule1] = Object.assign(
          state.currentSource[rule1] || {},
          obj
        );
      } else {
        state.currentSource[data.key] = value;
      }
      // edit last time
      state.currentSource.lastUpdateTime = new Date().getTime();
      //阅读app通过是否存在ruleToc键值判断3.0书源和2.0书源
      if (/bookSource/.test(location.href))
        state.currentSource["ruleToc"] = state.currentSource["ruleToc"] || {};
    },
    // update editTab tabName and editTab info
    changeTabName(state, tabName) {
      state.currentTab = tabName;
      localStorage.setItem("tabName", tabName);
      console.log(tabName);
    },
    changeEditTabSource(state, source) {
      const newContent = JSON.stringify(source);
      state.editTabSource = JSON.parse(newContent);
    },
    editHistory(state, history) {
      let historyObj;
      if (localStorage.getItem("history")) {
        historyObj = JSON.parse(localStorage.getItem("history"));
        historyObj.new.push(history);
        if (historyObj.new.length > 50) {
          historyObj.new.shift();
        }
        if (historyObj.old.length > 50) {
          historyObj.old.shift();
        }
        localStorage.setItem("history", JSON.stringify(historyObj));
      } else {
        const arr = { new: [history], old: [] };
        localStorage.setItem("history", JSON.stringify(arr));
      }
    },
    editHistoryUndo(state) {
      if (localStorage.getItem("history")) {
        let historyObj = JSON.parse(localStorage.getItem("history"));
        historyObj.old.push(state.currentSource);
        if (historyObj.new.length) {
          state.currentSource = historyObj.new.pop();
        }
        localStorage.setItem("history", JSON.stringify(historyObj));
      }
    },
    clearAllHistory() {
      localStorage.setItem("history", JSON.stringify({ new: [], old: [] }));
    },
    clearEdit(state) {
      state.editTabSource = {};
      state.currentSource = {};
    },
    appendDeBugMsg(state, msg) {
      let el = document.querySelector("#debug_text");
      el.scrollTop = el.scrollHeight;
      state.deBugMsg += msg + "\n";
    },
    clearDeBugMsg(state) {
      state.deBugMsg = "";
    },

    // clear all source
    clearAllSource(state) {
      state.bookSources = [];
      state.rssSources = [];
    },
  },
  actions: {},
  modules: {},
});
