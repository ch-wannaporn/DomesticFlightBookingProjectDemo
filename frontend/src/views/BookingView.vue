<template>
  <LoadingView v-if="loadingStatus" />
  <LayoutComponent v-else>
    <div class="my-8 space-x-4 flex flex-row w-2/3">
      <div class="basis-2/3 flex flex-col">
        <FlightDetailsComponent :flight="flight" />
        <PassengerInformationComponent :flight="flight" />
      </div>
      <SummaryComponent :flight="flight" :passengers="passengers" />
    </div>
  </LayoutComponent>
</template>

<script lang="ts">
import LayoutComponent from "@/components/Layout/LayoutComponent.vue";
import FlightDetailsComponent from "@/components/Booking/FlightDetailsComponent.vue";
import PassengerInformationComponent from "@/components/Booking/PassengerInformationComponent.vue";
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { getFlightById } from "../store/actions";
import { useRoute } from "vue-router";
import LoadingView from "./LoadingView.vue";
import { Passenger } from "@/classes";
import { IFlight } from "@/types";
import SummaryComponent from "@/components/Booking/SummaryComponent.vue";

export default defineComponent({
  name: "BookingView",
  components: {
    LayoutComponent,
    FlightDetailsComponent,
    LoadingView,
    PassengerInformationComponent,
    SummaryComponent,
  },
  setup: function () {
    const route = useRoute();
    const store = useStore();

    getFlightById(store, {
      flightId: route.params.flightId as string,
    });

    const flight = computed<IFlight>(() => store.getters.flight);
    const passengers = computed<Passenger>(() => store.getters.passengers);
    const loadingStatus = computed<boolean>(() => store.getters.loadingStatus);

    return {
      flight,
      passengers,
      loadingStatus,
    };
  },
});
</script>
