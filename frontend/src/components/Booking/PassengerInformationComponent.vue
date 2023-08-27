<template>
  <div class="bg-white rounded-md shadow-md p-8 mt-4">
    <div class="flex flex-row justify-between items-center">
      <div
        class="flex flex-row space-x-2 items-baseline font-semibold text-violet-500"
      >
        <span class="text-lg">Passenger Information</span>
        <div
          class="rounded-full border-2 border-violet-500 w-6 h-6 flex justify-center items-center"
        >
          <span class="text-sm">{{ index + 1 }}</span>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-4 h-4 text-gray-500 cursor-pointer"
        @click="$emit('removePassenger', index)"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    </div>
    <div class="grid grid-flow-row grid-cols-2 gap-2 items-center mt-4">
      <div class="flex flex-col">
        <label class="font-semibold text-sm">First Name</label>
        <input
          type="text"
          class="border border-violet-500 px-2 py-1 rounded-md focus:outline-none focus:bg-gray-50"
          :value="firstName"
          @input="
            $emit('update:firstName', ($event.target as HTMLInputElement).value)
          "
        />
      </div>
      <div class="flex flex-col">
        <label class="font-semibold text-sm">Last Name</label>
        <input
          type="text"
          class="border border-violet-500 px-2 py-1 rounded-md focus:outline-none focus:bg-gray-50"
          :value="lastName"
          @input="
            $emit('update:lastName', ($event.target as HTMLInputElement).value)
          "
        />
      </div>
      <div class="flex flex-col">
        <label class="font-semibold text-sm">Date Of Birth</label>
        <input
          type="date"
          class="border border-violet-500 px-2 py-1 rounded-md focus:outline-none focus:bg-gray-50"
          :value="dateOfBirth"
          @input="
            $emit(
              'update:dateOfBirth',
              ($event.target as HTMLInputElement).value
            )
          "
        />
      </div>
      <div class="flex flex-col">
        <label class="font-semibold text-sm">Passport No.</label>
        <input
          type="text"
          class="border border-violet-500 px-2 py-1 rounded-md focus:outline-none focus:bg-gray-50"
          :value="passportNo"
          @input="
            $emit(
              'update:passportNo',
              ($event.target as HTMLInputElement).value
            )
          "
        />
      </div>
    </div>
    <div class="mt-8 flex justify-end">
      <button
        type="button"
        class="border border-violet-500 text-violet-500 rounded-md px-2 py-1 focus:outline-none hover:bg-violet-500 hover:text-white"
        @click="$emit('addPassenger')"
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
  props: ["index", "firstName", "lastName", "dateOfBirth", "passportNo"],
});
</script>
