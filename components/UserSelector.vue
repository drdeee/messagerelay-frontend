<template>
  <div v-if="!selectedUser">
    <input
      v-model="content"
      type="text"
      placeholder="Suche nach Usern"
      class="form-control mb-2"
      @input="search()"
    />
    <div class="search-result card">
      <div v-if="result.length > 0" class="search-result-users">
        <div
          v-for="(user, index) in result"
          :key="index"
          @click="select(user)"
          style="user"
        >
          <div>{{ user.name }}</div>
        </div>
      </div>
      <div v-else-if="content === ''" class="search-info">
        Bitte suche in dem Eingabefeld nach einem User.
      </div>
      <div v-else class="search-info">Kein Ergebnis :(</div>
    </div>
  </div>
  <div v-else class="card p-2 selected-user">
    <div class="ms-2">
      {{ selectedUser.name }}
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-pencil-fill"
      viewBox="0 0 16 16"
      @click="clear()"
    >
      <path
        d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
      />
    </svg>
  </div>
</template>

<style>
.selected-user {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}

.selected-user svg:hover {
  color: rgb(75, 75, 75);
  cursor: pointer;
}

.search-result {
  max-height: 150px;
  height: 150px;
  overflow: auto;
}

.search-info {
  text-align: center;
  padding: 1em;
  padding-top: 1.5em;
  font-size: 14px;
}

.search-result-users {
  padding: 3px;
  text-transform: uppercase;
}
.search-result-users div {
  border-bottom: 1px solid rgb(202, 202, 202);
}

.search-result-users div div {
  margin: 3px;
  margin-left: 1em;
  cursor: pointer;
}

.search-result-users div:last-child {
  border-bottom: none;
}
</style>

<script>
export default {
  props: ["value"],
  data: () => ({
    content: "",
    selectedUser: undefined,
    result: [{name: 'Elias', id: 'asasdads'}],
  }),
  methods: {
    select: function (user) {
      this.selectedUser = user;
      this.result = [];
      this.$emit('input', this.selectedUser)
    },
    clear: function () {
      this.result = []
      this.selectedUser = undefined
      this.$emit('input', this.selectedUser)
    },
    search: async function () {
      setTimeout(async () => {
        try {
          this.result = await this.$axios.$get(
            "/user/find?query=" + this.content
          );
        } catch (e) {}
      }, 1000);
    },
  },
};
</script>