<template>
  <span class="badge custom-badge ms-1 px-3" @click="click()">{{ value }}</span>
</template>

<style>
.custom-badge {
  background-color: #1b7340c0;
  transition: 0.2s;
}

.custom-badge:hover {
  background-color: #f5334079;
  cursor: pointer;
}
</style>

<script>
export default {
  props: ["value"],
  methods: {
    click() {
      this.$emit("remove");
    },
  },
};
</script>