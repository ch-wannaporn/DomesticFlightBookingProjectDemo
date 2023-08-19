<template>
  <LayoutComponent>
    <BannerComponent/>
    <SearchBoxComponent/>
    <div class="mt-8 flex flex-col w-full md:w-2/3">
  <div
    class="my-4 rounded-md shadow-md flex w-full px-8 py-4 bg-white"
      v-for="flight in flights"
      :key="flight._id"
    >
    <div class="border-l-8 border-violet-500 flex flex-col w-full px-4">
      <span class="text-xl text-violet-500 font-bold"
        >{{ flight.airline }}</span
      >
      <div class="grid grid-flows-row grid-cols-4 mt-2">
        <div class="flex flex-col">
          <span class="font-semibold">Take off</span>
          <span>{{ flight.from.city }}</span>
          <span>{{ flight.from.airport }}</span>
          <span class="font-semibold text-violet-500 mt-1"
            >{{ new Date(flight.from.date).toLocaleString() }}</span
          >
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
            >{{ (new Date(flight.to.date).getTime() - new Date(flight.from.date).getTime()) / 3600000}} Hours</span
          >
        </div>
        <div class="flex flex-col">
          <span class="font-semibold">Price</span>
          <span class="text-xl font-bold"
            >{{ Number(flight.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }} Baht</span
          >
          <button
            class="px-4 py-2 mt-2 font-semibold rounded-md text-white bg-violet-500 hover:bg-violet-600"
          >
            Book now!
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>
  </LayoutComponent>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import LayoutComponent from '@/components/Layout/LayoutComponent.vue';
import BannerComponent from '@/components/Home/BannerComponent.vue';
import SearchBoxComponent from '@/components/Home/SearchBoxComponent.vue';
import { useStore } from 'vuex';
import { getAllFlights } from "../store/actions";

export default defineComponent({
  name: 'HomeView',
  components: {
    LayoutComponent,
    BannerComponent,
    SearchBoxComponent
  },
  setup: () => {
    const store = useStore()
    getAllFlights(store)

    return {
      flights: computed(()=> store.getters.flights),
      loadingStatus: computed(() => store.getters.loadingStatus)
    }
  }
});
</script>
