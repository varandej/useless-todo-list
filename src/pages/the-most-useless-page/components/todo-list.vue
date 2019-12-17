<template>
  <div>
    <TodoView
      v-for="(todo, index) in todos"
      :index="index"
      :key="todo.text"
      :todo="todo"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TodoView from './todo-view';

export default {
  computed: {
    ...mapState([
      'todos',
    ]),
  },
  components: {
    TodoView,
  },
}
</script>

<style>
</style>