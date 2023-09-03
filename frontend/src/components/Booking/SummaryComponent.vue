<template>
  <div
    class="basis-1/3 bg-violet-500 rounded-md shadow-md p-8 text-white font-semibold h-full sticky top-0"
  >
    <span class="text-lg flex w-full justify-center">Summary</span>
    <div class="mt-4 flex flex-col">
      <span class="underline decoration-dashed underline-offset-2 decoration-2"
        >Flight</span
      >
      <div class="mt-2 flex flex-col space-y-1">
        <span>{{ flight.airline }}</span>
        <div class="flex flex-row justify-between items-center">
          <span>{{ flight.from.city }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
          <span>{{ flight.to.city }}</span>
        </div>
        <div class="flex flex-row justify-between items-center">
          <span>{{ new Date(flight.from.date).toLocaleDateString() }}</span>
          <span>{{ new Date(flight.to.date).toLocaleDateString() }}</span>
        </div>
        <div class="flex flex-row justify-between items-center">
          <span>{{
            new Date(flight.from.date).toLocaleTimeString().replace(":00 ", " ")
          }}</span>
          <span>{{
            new Date(flight.to.date).toLocaleTimeString().replace(":00 ", " ")
          }}</span>
        </div>
        <span
          >Price:
          {{ changeToCurrencyFormat(flight.price) }}
          Baht</span
        >
      </div>
    </div>
    <div class="mt-4 flex flex-col">
      <span class="underline decoration-dashed underline-offset-2 decoration-2"
        >Passengers</span
      >
      <div class="mt-2 flex flex-col space-y-1">
        <span>Number of passengers: {{ passengers.length }}</span>
        <div v-for="(passenger, index) in passengers" :key="index">
          <span
            >{{ index + 1 }}.
            {{
              passenger.firstName && passenger.lastName
                ? `${passenger.firstName} ${passenger.lastName}`
                : "-"
            }}</span
          >
        </div>
      </div>
    </div>
    <button
      class="mt-4 px-4 py-2 w-full rounded-md bg-rose-300 hover:bg-rose-400 flex flex-row justify-center items-center space-x-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
      </svg>

      <span
        >Pay
        {{ changeToCurrencyFormat(flight.price * passengers.length) }}
        Baht</span
      >
    </button>
  </div>
</template>

<script lang="ts">
import { changeToCurrencyFormat } from "@/helpers/currency";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SummaryComponent",
  props: ["flight", "passengers"],
  setup: () => {
    return { changeToCurrencyFormat };
  },
});
</script>
