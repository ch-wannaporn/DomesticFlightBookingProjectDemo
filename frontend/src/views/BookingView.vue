<template>
  <LoadingView v-if="loadingStatus" />
  <LayoutComponent v-else>
    <div class="my-8 space-x-4 flex flex-row w-full md:w-2/3">
      <div class="basis-2/3 flex flex-col">
        <FlightDetailsComponent :flight="flight" />
        <form>
          <PassengerInformationComponent
            v-for="index in passengers"
            :key="index"
            :index="index"
            @add="passengers++"
          />
        </form>
      </div>
      <div class="basis-1/3 bg-violet-500 rounded-md shadow-md p-8">
        Summary
      </div>
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
import { loadingStatus } from "@/store/getters";

export default defineComponent({
  name: "BookingView",
  components: {
    LayoutComponent,
    FlightDetailsComponent,
    LoadingView,
    PassengerInformationComponent,
  },
  setup: function () {
    const route = useRoute();
    const store = useStore();

    const passengers = ref(1);

    getFlightById(store, {
      flightId: route.params.flightId as string,
    });

    return {
      flight: computed(() => store.getters.flight),
      loadingStatus: computed(() => store.getters.loadingStatus),
      passengers,
    };
  },
});
</script>
