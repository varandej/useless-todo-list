<template>
  <sui-segment>
    <sui-grid :columns="3" textAlign="center" verticalAlign="middle">
      <sui-grid-row>
        <sui-grid-column class="all">
          {{ `All: ${ todosCount }` }}
        </sui-grid-column>
        <sui-grid-column>
          {{ `Completed: ${ completedTodosCount }` }}
        </sui-grid-column>
        <sui-grid-column>
          <sui-button
            size="mini"
            color="green"
            content="Add task"
            @click="openModal"
          />
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </sui-segment>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import MutatiosTypes from '../../../store/mutation-types';

export default {
  computed: {
    ...mapGetters([
      'completedTodosCount',
      'todosCount',
    ]),
  },
  methods: {
    ...mapMutations({
      openModal: MutatiosTypes.SHOW_ADD_MODAL,
    }),
  },
}
</script>

<style>
.info-message {
  display: inline-block;
  height: 28px;
  margin: 0 !important;
  padding: 4px 12px !important;
}
.all {
  color: black;
}
</style>