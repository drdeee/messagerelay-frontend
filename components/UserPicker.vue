<template>
  <div>
      <div class="selected-users py-1">
              <UserLabel v-on:close="log()" v-for="i in 10" :key="i" value="Elias Bistry"/>
      </div>
  </div>
</template>

<style>
.selected-users {
    border: 1px solid #a9adb1;
    border-radius: 3px;
}
</style>

<script>
export default {
  data: () => ({
    users: [],
  }),
  mounted: function () {
    this.$store.commit("util/userpicker/clear");
  },
  methods: {
    log() {
      console.log("Ich wurde geschlossen");
    },
    addUser(user) {
      this.users.push(user);
      this.$store.commit("util/userpicker/add", user.id);
    },
    removeUser(userId) {
      this.$store.commit("util/userpicker/remove", userId);
      this.users.forEach((user, index) => {
        if (user.id === userId) this.users.splice(index, 1);
      });
    },
  },
};
</script>