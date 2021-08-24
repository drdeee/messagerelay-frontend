<template>
  <div>
    <div v-bind:class="style" @click="$store.commit('snackbar/clearSnack')">{{ msg }}</div>
    <section>
      <div class="container bg-light p-4 app">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<style>
.app {
  max-width: 1200px;
  margin-top: 6em;
  min-height: 70vh;
}
</style>

<script>
export default {
  computed: {
    data: function () {
      return this.$store.state.snackbar.current;
    },
    style: function () {
      return this.data ? "snackbar " + this.data.level : "snackbar hidden";
    },

    msg: function () {
      return this.data ? this.data.message : "";
    },
  },
};
</script>