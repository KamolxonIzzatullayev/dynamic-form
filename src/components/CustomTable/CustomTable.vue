<template>
  <div>
    <table cellspacing="0">
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index">
            {{ column.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tableRow, index) in tableData" :key="index">
          <template
            v-for="(tableCell, keyOfTableCell, index1) in tableRow"
            :key="index1"
          >
            <slot :name="`column-${keyOfTableCell}`">
              <td v-if="keyOfTableCell !== 'key'">
                {{ tableCell }}
                <slot :name="keyOfTableCell"></slot>
              </td>
            </slot>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      typeof: Array,
      required: true,
    },
    columns: {
      typeof: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./CustomTable.style.scss";
</style>
