<template>
  <div class="c-custom-tree">
    <div class="header">
      <span
        v-if="data.children.length"
        class="custom-checkbox"
        :class="isOneChecked"
        @click="spanIsClicked"
      ></span>
      <input
        :id="data.parent?.title"
        type="checkbox"
        v-model="parentValue"
        :style="{ display: data.children.length ? 'none' : 'block' }"
      />
      <label :for="data.parent?.title">{{ data.parent?.title }}</label>
    </div>
    <ul v-if="data.children.length">
      <li v-for="(child, childIndex) in data.children" :key="childIndex">
        <input
          v-model="child.value"
          type="checkbox"
          :id="`child${child.title + data.parent?.title + childIndex}`"
        />
        <label :for="`child${child.title + data.parent?.title + childIndex}`">
          {{ child.title }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      typeof: Object,
      required: true,
    },
  },

  data() {
    return {
      parentValue: false,
    };
  },

  watch: {
    parentValue(newVal, oldVal) {
      if (newVal) {
        this.data.children.forEach((element) => {
          element.value = true;
        });
      } else if (oldVal) {
        this.data.children.forEach((element) => {
          element.value = false;
        });
      }
    },

    data: {
      handler(newVal, oldVal) {
        let isAnyChecked = this.data.children.some((elem) => {
          return elem.value == true;
        });

        this.data.parent.isOneChecked = isAnyChecked;

        let allTrue = this.data.children.every((elem) => {
          return elem.value == true;
        });

        let oldAllTrue = oldVal.children.every((elem) => {
          return elem.value == true;
        });

        this.data.parent.isAllChecked = allTrue;

        if (allTrue) {
          this.parentValue = allTrue;
        } else if (oldAllTrue) {
          this.parentValue = false;
        }
      },
      deep: true,
    },
  },

  computed: {
    isOneChecked() {
      let isAnyChecked = this.data.children.some((elem) => {
        return elem.value == true;
      });
      if (this.data.parent.isOneChecked && this.data.parent.isAllChecked) {
        return "active";
      } else if (isAnyChecked && !this.data.parent.isAllChecked) {
        return "half-active";
      } else {
        return "";
      }
    },
  },

  methods: {
    spanIsClicked() {
      this.parentValue = !this.parentValue;
    },
    checkIsAllChecked() {
      let isAnyChecked = this.data.children.some((elem) => {
        return elem.value == true;
      });
      this.data.parent.isOneChecked = isAnyChecked;
      let allTrue = this.data.children.every((elem) => {
        return elem.value == true;
      });
      this.data.parent.isAllChecked = allTrue;
      if (allTrue) {
        this.parentValue = allTrue;
      } else {
        this.parentValue = false;
      }
    },
  },

  mounted() {
    this.checkIsAllChecked();
  },
};
</script>

<style lang="scss" scoped>
@import "./CustomTree.style.scss";
</style>
