<template>
  <sui-message
    compact
    :class="['todo-item', {
        'completed': todo.completed,
      },
    ]"
  >
    <sui-header class="todo-title">
      {{ todo.title }}
    </sui-header>
    <div class="todo-description">
      {{ todo.task }}
    </div>
    <div class="todo-actions">
      <sui-icon
        class="action-icon"
        name="check"
        @click="markTodoAsCompleted(index)"
        v-show="!todo.completed"
      />
      <sui-icon
        class="action-icon"
        name="pencil"
        @click="editTodo()"
        v-show="!todo.completed"
      />
      <sui-icon
        class="action-icon"
        name="trash"
        @click="deleteTodo(index)"
      />
    </div>
  </sui-message>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import MutationTypes from '../../../store/mutation-types';
import ActionTypes from '../../../store/action-types';

export default {
  props: {
    index: Number,
    todo: { completed: Boolean, task: String, title: String },
  },
  methods: {
    ...mapMutations({
      setModalData: MutationTypes.SET_MODAL_DATA,
      showModal: MutationTypes.SHOW_ADD_MODAL,
    }),
    ...mapActions({
      deleteTodo: ActionTypes.DELETE_TODO,
      markTodoAsCompleted: ActionTypes.MARK_TODO_AS_COMPLETED,
    }),
    editTodo() {
      this.setModalData({
        index: this.index,
        task: this.todo.task,
        title: this.todo.title,
      });
      this.showModal();
    }
  },
}
</script>

<style scoped>
.todo-item {
  background-color: white !important;
  height: 200px;
  margin: 10px 10px !important;
  width: 200px;
  word-wrap: break-word;
}
.todo-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.completed {
  background-color: rgba(115, 255, 115, 0.233) !important;
}
.todo-description {
  height: 135px;
  overflow: auto;
}
.action-icon {
  color: rgb(138, 138, 138);
  cursor: pointer;
}
.action-icon:hover {
  color: rgb(73, 73, 73);
}
</style>