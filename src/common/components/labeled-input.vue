<template>
  <label class="labeled-input">
    <span>{{ label }}</span>
    <sui-input
      :value="value"
      type="text"
      fluid
      @input="$emit('input', $event)"
    />
  </label>
</template>

<script>
export default {
  props: {
    'label': String,
    'value': String,
  },
}
</script>

<style>
.labeled-input {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  vertical-align: bottom;
}
</style>