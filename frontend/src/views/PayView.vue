<template>
  <LayoutComponent>
    <div class="flex w-full justify-center items-center">
      <form
        class="flex flex-col mt-16 p-8 gap-4 bg-white rounded-md shadow-md justify-center"
      >
        <span class="font-semibold text-lg text-violet-500 text-center"
          >Payment Information</span
        >
        <div class="flex flex-col">
          <label class="font-semibold text-sm">Name</label>
          <input
            class="border border-violet-500 px-2 py-1 rounded-md focus:outline-none focus:bg-gray-50"
            placeholder="JOHN DOE"
          />
        </div>
        <div class="flex flex-col">
          <label class="font-semibold text-sm">Card No.</label>
          <input
            class="border border-violet-500 px-2 py-1 rounded-md focus:outline-none focus:bg-gray-50"
            placeholder="4242424242424242"
          />
        </div>
        <div class="flex flex-col">
          <label class="font-semibold text-sm">CVV</label>
          <input
            class="border border-violet-500 px-2 py-1 rounded-md focus:outline-none focus:bg-gray-50"
            placeholder="123"
          />
        </div>
        <div class="flex flex-col">
          <label class="font-semibold text-sm">Expiration</label>
          <div class="flex items-center gap-x-2">
            <input
              class="border border-violet-500 px-2 py-1 rounded-md focus:outline-none focus:bg-gray-50"
              placeholder="MM"
            />
            <span>/</span>
            <input
              class="border border-violet-500 px-2 py-1 rounded-md focus:outline-none focus:bg-gray-50"
              placeholder="YYYY"
            />
          </div>
        </div>
        <button
          class="font-semibold text-white mt-4 px-4 py-2 w-full rounded-md bg-violet-500 hover:bg-violet-600"
        >
          Confirm
        </button>
      </form>
    </div>
  </LayoutComponent>
</template>

<script lang="ts">
import LayoutComponent from "@/components/Layout/LayoutComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PayView",
  components: { LayoutComponent },
});
</script>
