<template>
  <sui-modal
    class="block-loader"
    dimmer="inverted"
    :open="isFetchInProgress"
  >
    <sui-modal-content class="block-loader-content">
      Loading...
    </sui-modal-content>
  </sui-modal>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'isFetchInProgress',  
    ])
  },
}
</script>

<style>
.block-loader-content {
  font-size: 20px !important;
  text-align: center;
}
</style>