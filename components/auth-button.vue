<script lang="ts" setup>
import { createAuthClient } from "better-auth/client";

const authClient = createAuthClient();
const loading = ref(false);

async function signIn() {
  loading.value = true;
  await authClient.signIn.social({
    provider: "github",
    callbackURL: "/dashboard",
  });
}
</script>

<template>
  <button :disabled="loading" class="btn btn-accent" @click="signIn">
    Sign In With Github <Icon name="tabler:brand-github" size="24" />
  </button>
</template>
