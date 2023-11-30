<template>
  <div class="v-home">
    <div class="home-header">
      <h2>Instructions</h2>
      <ul class="home-header__list">
        <li class="home-header__list-item headline">First Task</li>
        <ol>
          <li class="home-header__list-item block">
            In the first task, there is a dynamic tree of some checkboxes. And
            you can add a new tree.
          </li>
          <li class="home-header__list-item block">
            In there, if you want to add some custom code from repository, you
            will need this structure:
            <code>
              <br />
              data: [ <br />&emsp; { parent: <br />&emsp;&emsp; { title: "",
              isAllChecked: false, isOneChecked: true, }, <br />&emsp;&emsp;
              children: [ <br />&emsp;&emsp;&emsp; { id: 1, title: "", value:
              true, }, <br />&emsp;&emsp;&emsp; { id: 2, title: "", value:
              false, } <br />&emsp;&emsp; ], <br />
              &emsp; } <br />
              ]
            </code>
          </li>
        </ol>
        <li>Second Task</li>
        <ol>
          <li class="home-header__list-item block">
            In the second task, you will be given a dynamic table.
          </li>
          <li class="home-header__list-item block">
            In there you will need to send 2 props. They are
            <code>{ columns, tableData }.</code>
          </li>
          <li class="home-header__list-item block">
            'Columns' props should be in this structure :
            <code>
              <br />
              columns: [
              <br />
              &emsp; { id: 1, title: "Id", key: "id", }, <br />
              &emsp; { id: 2, title: "Gender", key: "gender", }, <br />
              ],
            </code>
          </li>
          <li class="home-header__list-item block">
            'tabledata' props should be in this structure :
            <code>
              <br />
              tableData: [
              <br />
              &emsp; { id: 1, name: "male", }, <br />
              &emsp; { id: 2, name: "female", },
              <br />
              ],
            </code>
          </li>
          <li class="home-header__list-item block">
            In the table if you want to change table cells, you are able to
            change tablecells of the specific column.
            <br />
            <br />
            For this, you should do like this inside the component:
            <br />
            <br />
            <code>
              &lt;CustomTable :columns="columns" :tableData="tableData"&gt;
              <br />&emsp; &lt;template #column-${name}&gt; <br />&emsp;&emsp;
              &lt;td&gt;Something you need to change &lt;/td&gt; <br />
              &emsp; &lt;/template&gt; <br />
              &lt;/CustomTable &gt;
            </code>

            <br />
            <br />
            In here you need to add <code>#column-${name}</code> to the slot.
            "name" means the column which you want to change. And it will create
            from 0.
          </li>
          <li class="home-header__list-item block">
            In the table if you want to add something to the table cells under
            the specific column. you need to add this code inside your
            component.
            <br />
            <br />

            <code>
              <code>
                &lt;CustomTable :columns="columns" :tableData="tableData"&gt;
                <br />&emsp; &lt;template #${name}&gt; <br />&emsp;&emsp;
                Something you need to change <br />
                &emsp; &lt;/template&gt; <br />
                &lt;/CustomTable &gt;
              </code>
            </code>
            <br />
            <br />
            Here, this code will add "Something you need to change" to the cells
            of the column which is <code> #${name}</code>
          </li>
        </ol>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
