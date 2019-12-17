<template>
  <div class="header">
    <router-link
      :class="[
        'header-link',
        { 'selected': this.$route.path === '/most-useless-page' }
      ]"
      to="/most-useless-page"
    >
      useless page
    </router-link>
    <img src="../../assets/logo.png" class="pres-image" />
    <router-link
      :class="[
        'header-link',
        { 'selected': this.$route.path === '/most-usefull-page' }
      ]"
      to="/most-usefull-page"
    >
      usefull page
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.header {
  font-family: monospace;
  background-color: rgb(160, 236, 149);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}
.header-link {
  color:white;
  text-shadow: rgb(59, 143, 73) 0 0 4px;
  font-size: 18px;
  font-weight: bolder;
  margin: 0 15px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.header-link:hover {
  font-size: 22px;
}
.pres-image {
  width: 50px;
}
.selected {
  border-bottom: solid 2px white;
}
</style>