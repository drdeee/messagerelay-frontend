<template>
  <div>
    <Header site-name="Relay erstellen" />
    <div
      v-if="$auth.user.isSuperAdmin"
      class="card p-4 h-100 form-class m-auto"
    >
      <div class="text-center">
        <NuxtLink to="/" class="text-reset fw-light fs-6 text-decoration-none"
          >&#9666; Zurück zur Übersicht</NuxtLink
        >
        <hr class="mt-1" />
      </div>
      <div class="mb-3">
        <input
          placeholder="Relay-Name"
          type="text"
          class="form-control"
          aria-describedby="relayNameHelp"
          v-model="name"
        />
        <div id="relayNameHelp" class="form-text">
          Der Anzeigename des neuen Relays. Dieser wird in der Übersicht der
          Webapp angezeigt.
        </div>
      </div>
      <div class="mb-3">
        <UserSelector v-model="user"></UserSelector>
        <div class="form-text">
          Wähle hier einen User aus, der für dieses Relay Admin-Rechte bekommt.
        </div>
      </div>
      <div class="text-center mt-5">
        <button class="btn w-75" v-bind:disabled="!ready">Relay erstellen</button>
      </div>
    </div>
    <ErrorNoPermission v-else />
  </div>
</template>

<style>
.form-class {
  max-width: 400px;
}
</style>

<script>
export default {
  data: function () {
    return {
      user: undefined,
      name: undefined
    };
  },
  computed: {
    ready: function () {
      return this.user != undefined && this.name != undefined
    },
  },
};
</script>