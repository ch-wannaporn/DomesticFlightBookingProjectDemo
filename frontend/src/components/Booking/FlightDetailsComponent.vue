<template>
  <div class="bg-white rounded-md shadow-md p-8">
    <span class="font-semibold text-lg text-violet-500">Flight Details</span>
    <div class="mt-4 flex flex-row">
      <div class="basis-1/3 flex flex-col space-y-1 font-semibold">
        <span>Airline: </span>
        <span>Departure Airport: </span>
        <span>Departure Date: </span>
        <span>Arrival Airport: </span>
        <span>Arrival Date: </span>
        <span>Price: </span>
        <span>Remaining Tickets: </span>
      </div>
      <div class="basis-2/3 flex flex-col space-y-1">
        <span>{{ flight.airline }}</span>
        <span>{{ flight.from.airport }}, {{ flight.from.city }}</span>
        <span>{{ new Date(flight.from.date).toLocaleString() }}</span>
        <span>{{ flight.to.airport }}, {{ flight.to.city }}</span>
        <span>{{ new Date(flight.to.date).toLocaleString() }}</span>
        <span>{{
          Number(flight.price)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }}</span>
        <span class="text-violet-600">{{ flight.tickets }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FlightDetailsComponent",
  props: ["flight"],
});
</script>
