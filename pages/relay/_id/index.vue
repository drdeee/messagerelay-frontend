<template>
  <div>{{ id }}</div>
</template>

<script>
export default {
  async asyncData(ctx) {
    console.log(ctx)
    const { store, $axios, redirect, params } = ctx;
    const id = params.id;
    if (!(await store.dispatch("relays/ensureOne", id))) {
      redirect("/relay/404");
      return;
    }
    let permissions;
    try {
      permissions = $axios.$get(`/relay/${id}/${$auth.user.id}/me`);
    } catch (e) {}
    return { id, permissions };
  },
};
</script>