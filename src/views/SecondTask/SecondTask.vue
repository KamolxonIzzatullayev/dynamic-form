<template>
  <div class="home">
    <h2>Second task</h2>
    <CustomTable :columns="columns" :tableData="tableData"> </CustomTable>
  </div>
</template>

<script>
import CustomTable from "@/components/CustomTable/CustomTable.vue";

export default {
  name: "FirstTask",
  components: { CustomTable },
  data() {
    return {
      columns: [
        {
          id: 1,
          title: "Id",
          key: "id",
        },
        {
          id: 2,
          title: "Gender",
          key: "gender",
        },
      ],

      tableData: [
        {
          id: 1,
          name: "male",
        },
        {
          id: 2,
          name: "female",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./SecondTask.style.scss";
</style>
