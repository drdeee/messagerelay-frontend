<template>
  <div>
    <div class="w-100 app-header">
      <span class="user"
        >Willkommen,
        <b>{{displayName}}</b></span>
      <b class="site-name">{{ siteName }}</b>
      <button class="btn" @click="logout()">Logout</button>
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
  methods: {
    logout: function(){
      this.$auth.logout()
      this.$router.push('/login')
    }
  },
  computed: {
    displayName: function () {
      if(this.$auth.user.name)
        return this.$auth.user.name
      return this.$auth.user.preferred_username
    }
  }
};
</script>