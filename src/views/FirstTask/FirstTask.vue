<template>
  <div class="home">
    <h2>First task</h2>

    <div class="home-header">
      <button @click="isOpen = true">Add a new tree</button>
    </div>

    <CustomTree v-for="(item, index) in data" :key="index" :data="item" />

    <CustomModal
      v-if="isOpen"
      :isOpen="isOpen"
      @change-the-value="changeTheValue"
      @add-new-data="addNewData"
    />
  </div>
</template>

<script>
import CustomTree from "@/components/CustomTree/CustomTree.vue";
import CustomModal from "@/components/CustomModal/CustomModal.vue";

export default {
  name: "FirstTask",
  components: { CustomTree, CustomModal },
  data() {
    return {
      data: [
        {
          parent: {
            title: "Gender",
            isAllChecked: false,
            isOneChecked: true,
          },

          children: [
            {
              id: 1,
              title: "Male",
              value: true,
            },
            {
              id: 2,
              title: "Female",
              value: false,
            },
          ],
        },

        {
          parent: {
            title: "newGender",
            isAllChecked: false,
            isOneChecked: true,
          },

          children: [
            {
              title: "Male",
              value: true,
            },
            {
              title: "Female",
              value: false,
            },
            {
              title: "Male",
              value: true,
            },
            {
              title: "Female",
              value: false,
            },
          ],
        },
      ],
      isOpen: false,
    };
  },

  methods: {
    changeTheValue() {
      this.isOpen = false;
    },
    addNewData(a) {
      this.data.push(a);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./FirstTask.style.scss";
</style>
