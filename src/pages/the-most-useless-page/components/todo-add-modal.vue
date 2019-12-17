<template>
  <sui-modal v-model="isAddModalOpen" dimmer="inverted">
    <sui-modal-header>Add task</sui-modal-header>
    <sui-modal-content>
      <sui-grid>
        <sui-grid-row>
          <sui-grid-column :width="4">
            <LabeledInput
              label="Title"
              v-model="modalData.title"
            />
          </sui-grid-column>
          <sui-grid-column :width="12">
            <LabeledInput
              label="Description"
              v-model="modalData.task"
            />
          </sui-grid-column>
        </sui-grid-row>
      </sui-grid>
    </sui-modal-content>
    <sui-modal-actions>
      <sui-button
        basic
        content="Decline"
        @click="closeModal"
      />
      <sui-button
        color="green"
        content="Save"
        @click="saveTodo"
        :disabled="!modalData.title || !modalData.task"
      />
    </sui-modal-actions>
  </sui-modal>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import MutationTypes from '../../../store/mutation-types';
import ActionTypes from '../../../store/action-types';
import LabeledInput from '../../../common/components/labeled-input';

export default {
  computed: {
    ...mapState([
      'isAddModalOpen',
      'modalData',
    ]),
  },
  methods: {
    ...mapMutations({
      closeModal: MutationTypes.CLOSE_ADD_MODAL_AND_CLEAR_DATA,
    }),
    ...mapActions({
      addTodo: ActionTypes.ADD_TODO,
      editTodo: ActionTypes.EDIT_TODO,
    }),
    saveTodo() {
      if (this.modalData.index) {
        this.editTodo(this.modalData);
      } else {
        this.addTodo(this.modalData);
      }
      this.closeModal();
    },
  },
  components: {
    LabeledInput,
  },
}
</script>

<style scoped>
</style>