<template>
  <nav class="flex w-full h-20 justify-center items-center bg-white shadow-md">
    <div class="flex w-2/3 justify-between items-baseline">
      <router-link class="text-2xl text-violet-500 font-semibold" to="/"
        >Domestic Flight Booking</router-link
      >
      <div class="flex items-center font-semibold" v-if="isAuthenticated">
        <span>Hi, {{ user?.name }}</span>
        <span class="px-2">|</span>
        <span
          class="cursor-pointer hover:text-rose-300 hover:underline hover:decoration-dashed hover:underline-offset-2"
          @click="logout"
          >Logout</span
        >
      </div>
      <div class="flex items-center font-semibold" v-else>
        <span
          class="cursor-pointer hover:text-rose-300 hover:underline hover:decoration-dashed hover:underline-offset-2"
          @click="login"
          >Log in</span
        >
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";

export default defineComponent({
  name: "HeaderComponent",
  setup: function () {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    return {
      login: () => loginWithRedirect(),
      logout: () => logout(),
      user,
      isAuthenticated,
    };
  },
});
</script>
