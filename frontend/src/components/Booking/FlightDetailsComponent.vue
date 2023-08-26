<template>
  <div class="bg-white rounded-md shadow-md p-8">
    <span class="font-semibold text-lg text-violet-500">Flight Details</span>
    <div class="mt-4 flex flex-row">
      <div class="basis-1/3 flex flex-col space-y-1">
        <span class="font-semibold">Airline: </span>
        <span class="font-semibold">Departure Airport: </span>
        <span class="font-semibold">Departure Date: </span>
        <span class="font-semibold">Arrival Airport: </span>
        <span class="font-semibold">Arrival Date: </span>
      </div>
      <div class="basis-2/3 flex flex-col space-y-1">
        <span>{{ flight.airline }}</span>
        <span> {{ flight.from.airport }}, {{ flight.from.city }}</span>
        <span> {{ new Date(flight.from.date).toLocaleString() }}</span>
        <span> {{ flight.to.airport }}, {{ flight.to.city }}</span>
        <span> {{ new Date(flight.to.date).toLocaleString() }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineProps } from "vue";
import { IFlight } from "@/interfaces";

export default defineComponent({
  name: "FlightDetailsComponent",
  props: ["flight"],
});
</script>
