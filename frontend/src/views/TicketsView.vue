<template>
  <LayoutComponent>
    <div class="flex flex-col justify-center items-center w-full py-12">
      <div
        class="flex flex-col mt-16 p-8 gap-4 bg-white rounded-md shadow-md justify-center items-center w-1/3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-24 h-24 text-green-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span class="font-semibold text-lg text-center"
          >Successfully booked tickets!</span
        >
        <span
          >&emsp;&emsp;Please checkout your mailbox for e-tickets. If there is
          no email from us sent to your mailbox, do not hesitate to contact us
          via wannaporn.chk@gmail.com or 061-896-3188. Thank you.</span
        >
      </div>
    </div>
  </LayoutComponent>
</template>

<script lang="ts">
import LayoutComponent from "@/components/Layout/LayoutComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TicketsView",
  components: { LayoutComponent },
});
</script>
