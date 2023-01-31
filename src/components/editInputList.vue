<template>
  <div class="main">
    <edit-input
      v-for="(item, index) in data"
      :key="index"
      :id="item.id"
      :type="item.type"
      :hint="item.hint"
      :title="item.title"
      :rows="item.rows"
      :content="getContent(item.id)"
      @changeContent="upData"
    ></edit-input>
  </div>
</template>

<script>
import editInput from "@/components/editInput";
import { reactive, toRefs } from "vue";
import useCounter from "@/utils/useCounter";

export default {
  name: "editInputList",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  components: {
    editInput,
  },
  setup(props) {
    const { upData, getContent } = useCounter();
    const data = reactive({
      data: props.data,
    });
    return {
      ...toRefs(data),
      upData,
      getContent,
    };
  },
};
</script>

<style lang="scss"></style>
