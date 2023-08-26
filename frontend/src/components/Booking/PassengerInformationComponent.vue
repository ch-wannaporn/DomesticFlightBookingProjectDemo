<template>
  <div class="bg-white rounded-md shadow-md p-8 mt-4">
    <div
      class="flex flex-row space-x-2 items-baseline font-semibold text-violet-500"
    >
      <span class="text-lg">Passenger Information</span>
      <div
        class="rounded-full border-2 border-violet-500 w-6 h-6 flex justify-center items-center"
      >
        <span class="text-sm">{{ index }}</span>
      </div>
    </div>
    <div class="grid grid-flow-row grid-cols-2 gap-2 items-center mt-4">
      <div class="flex flex-col">
        <label class="font-semibold text-sm">First Name</label>
        <input
          type="text"
          class="border border-violet-500 px-2 py-1 rounded-md focus:outline-none focus:bg-gray-50"
        />
      </div>
      <div class="flex flex-col">
        <label class="font-semibold text-sm">Last Name</label>
        <input
          type="text"
          class="border border-violet-500 px-2 py-1 rounded-md focus:outline-none focus:bg-gray-50"
        />
      </div>
      <button
        type="button"
        class="border border-violet-500 text-violet-500 rounded-md px-2 py-1"
        @click="$emit('add')"
      >
        + Add More Passenger
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PassengerInformationComponent",
  props: ["index"],
});
</script>
