<template>
  <div class="text-center mt-5 h2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="70"
      fill="currentColor"
      class="bi bi-slash-circle mt-5"
      viewBox="0 0 16 16"
    >
      <path
        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
      />
      <path
        d="M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708z"
      /></svg
    ><br /><br />
    Du hast nicht die benötigten Rechte dafür :(<br />
    Wenn du denkst, dies sollte anders sein, melde dich bei einem Systemdmin.
    <div class="mt-3"></div>
    <button @click="$router.push('/')" class="btn container-fluid w-75">
      Zurück zur Relay-Übersicht
    </button>
  </div>
</template>