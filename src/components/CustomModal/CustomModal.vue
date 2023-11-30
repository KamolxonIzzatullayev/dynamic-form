<template>
  <div class="c-modal">
    <div class="modal-back" @click="changeIsOpen"></div>
    <div class="modal-body">
      <div class="modal-body__header">
        <div @click="changeIsOpen">x</div>
        <h1>Add a new tree</h1>
      </div>
      <div class="modal-body__body">
        <label for="newTree"> Add a new parent: </label>
        <input
          type="text"
          id="newTree"
          placeholder="New parent title"
          v-model="parentTitle"
        />
        <template v-if="children.length">
          <p>Children</p>
          <div
            v-for="(child, index) in children"
            :key="index"
            class="modal-body__body-children"
          >
            <h4>{{ index + 1 }} - child</h4>
            <label :for="`modal-input-index${index}`">What is the title</label>
            <input
              type="text"
              placeholder="Title for the child"
              :id="`modal-input-index${index}`"
            />

            <button @click="deleteChild(index)">Delete child</button>
          </div>
        </template>
        <button @click="addNewChildren">Add a new child</button>
      </div>

      <div class="modal-body__footer">
        <button @click="save">Save</button>
        <button @click="cancel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      typeof: Boolean,
      required: true,
    },
  },
  data() {
    return {
      children: [],
      id: 1,
      parentTitle: "",
    };
  },
  methods: {
    changeIsOpen() {
      this.$emit("changeTheValue", false);
    },
    addNewChildren() {
      this.children.push({
        id: this.id,
        title: "",
        value: false,
      });
      this.id++;
    },
    clearData() {
      this.children = [];
      this.id = 1;
      this.parentTitle = "";
    },
    cancel() {
      this.clearData();
      this.changeIsOpen();
    },
    save() {
      let newData = {
        parent: {
          title: this.parentTitle,
          isAllChecked: false,
          isOneChecked: true,
        },

        children: this.children,
      };

      this.$emit("addNewData", newData);
      this.clearData();
      this.changeIsOpen();
    },
    deleteChild(index) {
      this.children.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./CustomModal.style.scss";
</style>
