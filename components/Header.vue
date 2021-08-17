<template>
  <div>
    <div class="w-100 app-header">
      <span class="user"
        >Willkommen,
        <b>{{ $auth.user.name | $auth.user.preferred_username }}</b></span
      >
      <b class="site-name">{{ siteName }}</b>
      <button class="btn" v-on:click="$auth.logout()">Logout</button>
    </div>
    <hr />
  </div>
</template>

<style>
.app-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.7em;
  align-items: center;
}

.site-name {
  font-size: 22px;
}

@media screen and (min-width: 550px) {
  div.app-header button {
    width: 200px;
  }
}

@media screen and (max-width: 480px) {
  div.app-header .user {
    display: none;
  }
}
</style>

<script>
export default {
  props: ["siteName"],
};
</script>