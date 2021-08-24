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
        <button class="btn w-75" v-bind:disabled="!ready" @click="create()">
          <span v-if="!loading"> Relay erstellen</span>
          <div v-else class="spinner-border loading" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </button>
      </div>
    </div>
    <ErrorNoPermission v-else />
  </div>
</template>

<style>
.form-class {
  max-width: 400px;
}

.loading {
  width: 20px;
  height: 20px;
  border-width: 3px;
}
</style>

<script>
export default {
  data: function () {
    return {
      user: undefined,
      name: undefined,
      loading: false,
    };
  },
  computed: {
    ready: function () {
      return this.user != undefined && this.name != undefined;
    },
  },
  methods: {
    async create() {
      this.loading = true;
      try {
        const id = await this.$axios.$post("/relay", {
          name: this.name,
        });
        await this.$store.dispatch("relays/fetchOne", id);
        await this.$axios.$post("/relay/" + id + "/permission", {
          userId: this.user.id,
          canRead: true,
          canWrite: true,
          isAdmin: true,
        });
        this.loading = false;
        this.$store.dispatch("snackbar/info", "Relay erstellt!");
        this.$router.push("/relay/" + id + "/");
      } catch (e) {
        this.loading = false;
        console.warn("ERROR WHILE CREATING RELAY:", e);
        this.$store.dispatch(
          "snackbar/warn",
          "Fehler beim Erstellen des Relays!"
        );
      }
    },
  },
};
</script>