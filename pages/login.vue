<template>
  <div v-if="showPage">
    <img
      src="~/assets/img/fridaysforfuture.png"
      class="rounded mx-auto d-block logo"
    />
    <div class="title">MessageRelay</div>
    <hr class="divider" />
    <div class="welcome">
      <div>
        <b>Willkommen Aktivist:in</b>,<br />
        du befindest dich hier auf einer Website von Fridays for Future, mit der
        die
        <a href="https://fridaysforfuture.info/lexikon/ctf/" target="_blank"
          >Communication Task Force</a
        >
        und andere Gruppen Informationen unter den Whatsapp- und Matrixgruppen
        zu verteilen. <br /><br />
        <ul>
          <li>
            <b>Du suchst nach Informationen?</b><br />
            <span
              >Dann bist du hier leider falsch. Diese Website ist nur zum Senden
              der Nachrichten gedacht. Schaue in den entsprechenden Gruppen
              nach.</span
            >
          </li>
          <li>
            <b>Du möchtest eine Nachricht senden?</b><br />
            <span
              >Sobald du dich angemeldet hast kannst du Nachrichten
              verfassen.</span
            >
          </li>
          <li>
            <b>Fehler in einer Nachricht?</b><br />
            <span
              >Nachrichten können leider nicht wiederrufen werden, vielleicht
              wird das aber noch implementiert.</span
            >
          </li>
          <li>
            <b>Bug gefunden?</b><br />
            <span
              >Bitte melde Bugs hier: <a target="_blank">zum Support</a></span
            >
          </li>
        </ul>
      </div>
      <div class="container container-fluid button-container">
        <button
          id="login-button"
          class="btn"
          v-on:click="$auth.loginWith('cloud')"
        >
          Anmelden
        </button>
      </div>
    </div>
  </div>
  <div v-else class="center pt-5">
    <div class="spinner-border text-secondary" style="height: 5rem; width: 5rem" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<style>
#login-button {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  text-transform: uppercase;
  font-weight: bold;
  padding: 5px;
  background-color: #1da64a;
  color: #f9f7f0;
  border-radius: 0;
  box-shadow: 6px 6px 0px -1px #1b7340;
  -webkit-box-shadow: 6px 6px 0px -1px #1b7340;
  -moz-box-shadow: 6px 6px 0px -1px #1b7340;
}

.logo {
  margin-top: 1em;
  width: 200px;
  height: auto;
}

.button-container {
  margin-top: 3em;
  text-align: center;
}

.title {
  width: 100%;
  padding-top: 10px;
  text-align: center;
  font-family: jost-bold;
  font-size: 1.5em;
}

.welcome {
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 480px) {
  .welcome {
    flex-direction: column-reverse;
  }

  .button-container {
    margin-top: 0em;
    margin-bottom: 1em;
    text-align: center;
  }

  #login-button {
    width: 100%;
  }
}

.center {
  display: flex;
  justify-content: center;
}
</style>

<script>
export default {
  layout: "login",
  data: () => {
    return {
      showPage: false,
    };
  },
  mounted: function () {
    setTimeout(() => {
      this.showPage = true;
    }, 500);
  },
  middleware: (ctx) => {
    if (ctx.$auth.loggedIn) return ctx.redirect("/");
  },
};
</script>