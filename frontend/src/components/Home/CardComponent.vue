<template>
  <div class="my-4 rounded-md shadow-md flex w-full px-8 py-4 bg-white">
    <div class="border-l-8 border-violet-500 flex flex-col w-full px-4">
      <span class="text-xl text-violet-500 font-bold">{{
        flight.airline
      }}</span>
      <div class="grid grid-flows-row grid-cols-4 mt-2">
        <div class="flex flex-col">
          <span class="font-semibold">Take off</span>
          <span>{{ flight.from.city }}</span>
          <span>{{ flight.from.airport }}</span>
          <span class="font-semibold text-violet-500 mt-1">{{
            new Date(flight.from.date).toLocaleString()
          }}</span>
        </div>
        <div class="flex flex-col">
          <span class="font-semibold">Landing</span>
          <span>{{ flight.to.city }}</span>
          <span>{{ flight.to.airport }}</span>
          <span class="font-semibold text-violet-500 mt-1">
            {{ new Date(flight.to.date).toLocaleString() }}
          </span>
        </div>
        <div class="flex flex-col">
          <span class="font-semibold">Total Time</span>
          <span
            >{{
              (new Date(flight.to.date).getTime() -
                new Date(flight.from.date).getTime()) /
              3600000
            }}
            Hours</span
          >
        </div>
        <div class="flex flex-col">
          <span class="font-semibold">Price</span>
          <span class="text-xl font-bold"
            >{{ changeToCurrencyFormat(flight.price) }} Baht</span
          >
          <router-link
            :to="`/booking/${flight._id}`"
            class="px-4 py-2 mt-2 font-semibold rounded-md text-white text-center bg-violet-500 hover:bg-violet-600"
          >
            Book now!
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { changeToCurrencyFormat } from "@/helpers/currency";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardComponent",
  props: ["flight"],
  setup: () => {
    return { changeToCurrencyFormat };
  },
});
</script>
