<template>
  <div>
    <Header site-name="Relay erstellen" />
    <div v-if="$auth.user.isSuperAdmin" class="card p-4 h-100">
      <div class="mb-3">
        <label for="relayName" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="relayName"
          aria-describedby="relayNameHelp"
        />
        <div id="relayNameHelp" class="form-text">
          Der Anzeigename des neuen Relays. Dieser wird in der Übersicht der
          Webapp angezeigt.
        </div>
      </div>
      <div class="mb-3">
        <UserPicker v-bind:users="users" />
      </div>
      <div class="mb-3">
        <span v-for="(user, index) of users" :key="index">{{ user }}</span>
      </div>
      <div class="text-center">
      <button class="btn w-75">Relay erstellen</button></div>
    </div>
    <ErrorNoPermission v-else />
  </div>
</template>

<script>
export default {
  data: function () {
    this.$store.commit("util/userpicker/clear");
    return {
      users: this.$store.state.util.userpicker.users,
    };
  },
};
</script>