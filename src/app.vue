<template lang="html">
  <div id="app" :class="{ 'turbo-mode': isInTurboMode }">
    <Header />
    <sui-grid class="root-wrapper">
      <sui-grid-row>
        <sui-grid-column :width="16">
          <router-view></router-view>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
    <BlockLodaer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ActionTypes from './store/action-types';
import BlockLodaer from './common/components/block-loader';
import Header from './common/components/header';

export default {
  name: 'app',
  created() {
    this.initApplication();
  },
  computed: {
    isInTurboMode() {
      return this.$route.path === '/most-usefull-page';
    },
  },
  methods: {
    ...mapActions({
      initApplication: ActionTypes.FETCH_TODOS,
    }),
  },
  components: {
    BlockLodaer,
    Header,
  },
};

</script>

<style scoped>
#app {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background-color: rgb(245, 255, 249);
  color: green;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  min-height: 100%;
}
.root-wrapper {
  align-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  min-width: 800px;
  text-align: center;
}
.turbo-mode {
  background-color: black !important;
}
</style>
