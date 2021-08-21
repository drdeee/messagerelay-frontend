<template>
  <div>
    <Header site-name="Übersicht" />
    <div>
      Dies ist die Übersicht des MessageRelays. Hier findest du alle Relays
      (Gruppen), auf die du mindestens Leseberechtigung hast. Um Nachrichten zu
      senden oder zu lesen musst du auf das entsprechende Relay gehen.
      <div class="relays mt-3 p-1">
        <button class="relay m-1 btn" v-for="relay in relays" :key="relay" @click="click(relay.id)">
          {{ relay.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.relays {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.relay {
  display: block;
  width: 49%;
  background-color: gray;
}
</style>
<script>
export default {
  data: function () {
    return {
      relays: [
        {
          id: 123,
          name: "test",
        },
        {
          id: 13,
          name: "test",
        },
        {
          id: 123,
          name: "test",
        },
        {
          id: 13,
          name: "test",
        },
        {
          id: 123,
          name: "test",
        },
        {
          id: 13,
          name: "test",
        },
        {
          id: 123,
          name: "test",
        },
        {
          id: 13,
          name: "test",
        }
      ],
    };
  },
  methods: {
    click: function (id) {
      this.$router.push('/relay/' + id + '/')
    },
  },
};
</script>