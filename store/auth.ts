import { createAuthClient } from "better-auth/client";

const authClient = createAuthClient();

export const useAuthStore = defineStore("useAuthStore", () => {
  const loading = ref(false);
  async function signIn() {
    console.log("login attempted");
    loading.value = true;
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      errorCallbackURL: "/error",
    });
    loading.value = false;
  }
  //   state: () => ({
  //     loading: false,
  //   }),
  //   actions: {
  //     async signIn() {
  //       this.loading = true;
  //       await authClient.signIn.social({
  //         provider: "github",
  //         callbackURL: "/dashboard",
  //       });
  //       this.loading = false;
  //     },
  //   },
  return {
    loading,
    signIn,
  };
});
