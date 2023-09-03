<template>
  <LoadingView v-if="loadingStatus" />
  <LayoutComponent v-else>
    <BannerComponent />
    <SearchBoxComponent :cities="cities" />
    <div class="mt-8 flex flex-col w-2/3">
      <CardComponent
        v-for="flight in flights"
        :key="flight._id"
        :flight="flight"
      ></CardComponent>
    </div>
  </LayoutComponent>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import LayoutComponent from "@/components/Layout/LayoutComponent.vue";
import BannerComponent from "@/components/Home/BannerComponent.vue";
import SearchBoxComponent from "@/components/Home/SearchBoxComponent.vue";
import { useStore } from "vuex";
import { getAllCities, getAllFlights } from "../store/actions";
import LoadingView from "./LoadingView.vue";
import CardComponent from "@/components/Home/CardComponent.vue";
import { ICity, IFlight } from "@/types";

export default defineComponent({
  name: "HomeView",
  components: {
    LayoutComponent,
    BannerComponent,
    SearchBoxComponent,
    LoadingView,
    CardComponent,
  },
  setup: () => {
    const store = useStore();

    getAllCities(store);
    getAllFlights(store);

    return {
      cities: computed<ICity[]>(() => store.getters.cities),
      flights: computed<IFlight[]>(() => store.getters.flights),
      loadingStatus: computed<boolean>(() => store.getters.loadingStatus),
    };
  },
});
</script>
