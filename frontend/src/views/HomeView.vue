<template>
  <LoadingView v-if="loadingStatus" />
  <LayoutComponent v-else>
    <BannerComponent />
    <SearchBoxComponent />
    <div class="mt-8 flex flex-col w-full md:w-2/3">
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
import { getAllFlights } from "../store/actions";
import LoadingView from "./LoadingView.vue";
import CardComponent from "@/components/Home/CardComponent.vue";

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

    getAllFlights(store);

    return {
      flights: computed(() => store.getters.flights),
      loadingStatus: computed(() => store.getters.loadingStatus),
    };
  },
});
</script>
