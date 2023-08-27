<template>
  <LoadingView v-if="loadingStatus" />
  <LayoutComponent v-else>
    <div class="my-8 space-x-4 flex flex-row w-2/3">
      <div class="basis-2/3 flex flex-col">
        <FlightDetailsComponent :flight="flight" />
        <form>
          <PassengerInformationComponent
            v-for="(passenger, index) in passengers"
            :key="index"
            :index="index"
            v-model:first-name="passenger.firstName"
            v-model:last-name="passenger.lastName"
            v-model:date-of-birth="passenger.dateOfBirth"
            v-model:passenger-no="passenger.passportNo"
            @add-passenger="addPassenger"
            @remove-passenger="removePassenger"
          />
        </form>
      </div>
      <div
        class="basis-1/3 bg-violet-500 rounded-md shadow-md p-8 text-white h-full sticky top-0"
      >
        <span class="font-semibold text-lg">Summary</span>
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
import { flight, loadingStatus } from "@/store/getters";
import { Passenger } from "@/classes";
import { IFlight } from "@/interfaces";

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

    getFlightById(store, {
      flightId: route.params.flightId as string,
    });

    const flight = computed<IFlight>(() => store.getters.flight);
    const loadingStatus = computed<boolean>(() => store.getters.loadingStatus);

    const passengers = ref([new Passenger()]);
    const addPassenger = () => {
      if (
        passengers.value.length < flight.value.tickets &&
        passengers.value.length < 4
      )
        passengers.value.push(new Passenger());
    };
    const removePassenger = (index: number) => {
      if (passengers.value.length > 1) passengers.value.splice(index, 1);
    };

    return {
      flight,
      loadingStatus,
      passengers,
      addPassenger,
      removePassenger,
    };
  },
});
</script>
