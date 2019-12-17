<template>
  <div>
    <sui-grid class="form-wrapper">
      <sui-grid-row>
        <sui-grid-column :width="16">
          <sui-header
            as="h2"
            content="Good evening Sir! Here you can see the most useless page in the world"
          />
        </sui-grid-column>
      </sui-grid-row>
      <sui-grid-row>
        <sui-grid-column :width="16">
          <InfoPanel />
        </sui-grid-column>
      </sui-grid-row>
      <sui-grid-row>
        <sui-grid-column :width="16" textAlign="center" class="todos-wrapper">
          <TodoList />
        </sui-grid-column>
      </sui-grid-row>
      <sui-grid-row>
        <sui-grid-column floated="right" :width="4">
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
    <TodoAddModal />
  </div>
</template>

<script>
import TodoAddModal from './components/todo-add-modal';
import TodoList from './components/todo-list';
import InfoPanel from './components/info-panel';

export default {
  components: {
    InfoPanel,
    TodoAddModal,
    TodoList,
  },
};
</script>

<style scoped>
  .form-wrapper {
    margin: 0 auto !important;
    padding: 0 60px;
    width: 700px;
  }
  .todos-wrapper {
    align-items: flex-start;
    display: flex !important;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>