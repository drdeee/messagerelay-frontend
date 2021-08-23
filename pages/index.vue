<template>
  <div>
    <Header site-name="Übersicht" />
    <div>
      Dies ist die Übersicht des MessageRelays. Hier findest du alle Relays
      (Gruppen), auf die du mindestens Leseberechtigung hast. Um Nachrichten zu
      senden oder zu lesen musst du auf das entsprechende Relay gehen.
      <div v-if="$auth.user.isSuperAdmin" class="text-center">
        <hr>
        <button class="btn create-relay" @click="$router.push('/relay/create')">Relay erstellen</button>
        <hr>
      </div>
      <div class="relays mt-3 p-1">
        <button
          class="relay me-1 mt-1 btn"
          v-for="(relay, index) in relays"
          :key="index"
          @click="click(relay.id)"
        >
          {{ relay.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.create-relay {
  width: 75%
}
.relays {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

button.relay.btn {
  display: block;
  width: 49%;
  box-shadow: none;
}
</style>
<script>
export default {
  mounted: function () {
    this.$store.dispatch('relays/fetchAll')
  },
  computed: {
    relays: function () {
      return this.$store.state.relays.relays;
    },
  },
  methods: {
    click: async function (id) {
      if (await this.$store.dispatch("relays/ensureOne", id)) {
        this.$router.push("/relay/" + id);
      } else {
        this.$router.push("/relay/404");
      }
    },
  },
};
</script>