<template>
  <div>
    <Header site-name="Nicht gefunden :(" />
    <div class="text-center mt-5 h2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="70px"
        height="70px"
        fill="currentColor"
        class="bi bi-search mt-5"
        viewBox="0 0 16 16"
      >
        <path
          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
        />
      </svg><br><br>
      Dieses Relay exsistiert nicht.
      <div class="mt-2"></div>
      <button
        v-if="$auth.user.isSuperAdmin"
        @click="$router.push('/relay/create')"
        class="btn container-fluid mb-2 button-404"
      >
        Relay erstellen
      </button>
      <button @click="$router.push('/')" class="btn container-fluid button-404">
        Zurück zur Relay-Übersicht
      </button>
    </div>
  </div>
</template>

<style>
.button-404 {
  max-width: 75%;
}
</style>