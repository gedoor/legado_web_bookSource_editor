<template>
  <div class="edit_input">
    <span>{{ title }}<i>:</i></span>
    <textarea
      :id="id"
      :class="type"
      :placeholder="hint"
      :rows="rows"
      :value="content"
      ref="attr"
      @input="change"
      @blur="
        changeHistory();
        restoreHeight();
      "
      @focus="adjustHeight"
    ></textarea>
  </div>
</template>

<script>
import { ref } from "vue";
import store from "@/store";
import calcTextareaHeight from "@/utils/calcTextareaHeight";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    rows: {
      type: Number,
      default: 1,
    },
    hint: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "String",
    },
    content: {
      type: [String, Number, Boolean],
      default: "",
    },
  },
  emits: ["changeContent"],
  setup(props, { emit }) {
    const attr = ref("");
    const change = () => {
      emit("changeContent", {
        value: attr.value.value,
        key: attr.value.getAttribute("id"),
        type: attr.value.getAttribute("class"),
      });
      adjustHeight();
    };
    const changeHistory = () => {
      if (!localStorage.getItem("history")) {
        localStorage.setItem("history", JSON.stringify({ new: [], old: [] }));
      }
      const history = JSON.parse(localStorage.getItem("history"));

      const newHistory = history.new;
      if (newHistory.length) {
        const idName = attr.value.getAttribute("id");
        if (
          !idName.includes("_") &&
          newHistory[newHistory.length - 1][idName] !==
            store.state.currentSource[idName]
        ) {
          store.commit("editHistory", store.state.currentSource);
        } else if (idName.includes("_")) {
          let rule1 = idName.split("_")[0];
          let rule2 = idName.split("_")[1];
          if (
            newHistory[newHistory.length - 1][rule1][rule2] !==
            store.state.currentSource[rule1][rule2]
          ) {
            store.commit("editHistory", store.state.currentSource);
          }
        }
      } else {
        store.commit("editHistory", store.state.currentSource);
      }
    };

    const restoreHeight = () => (attr.value.style = "");
    const adjustHeight = () => {
      attr.value.style.height = calcTextareaHeight(attr.value).height;
    };
    return {
      changeHistory,
      change,
      attr,
      adjustHeight,
      restoreHeight,
    };
  },
};
</script>

<style lang="scss" scoped>
span {
  display: flex;
  justify-content: space-around;
  width: 70px;
  white-space: nowrap;

  i {
    font-style: normal;
  }
}

.edit_input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 5px;
}
</style>
