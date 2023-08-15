<template>
  <LayoutComponent>
    <BannerComponent/>
    <SearchBoxComponent/>

    <div class="mt-8 flex flex-col w-full md:w-2/3">
  <div
    class="my-4 rounded-md shadow-md flex w-full px-8 py-4 bg-white cursor-pointer"
  >
    <div class="border-l-8 border-violet-500 flex flex-col w-full px-4">
      <span class="text-xl text-violet-500 font-bold"
        >Ming Airline</span
      >
      <div class="grid grid-flows-row grid-cols-4 mt-2">
        <div class="flex flex-col">
          <span class="font-semibold">Take off</span>
          <span>Phuket Airport</span>
          <span>Phuket Airport</span>
          <span class="font-semibold text-violet-500 mt-1"
            >{{ Date.toLocaleString() }}</span
          >
        </div>
        <div class="flex flex-col">
          <span class="font-semibold">Landing</span>
          <span>Songkhla Airport</span>
          <span>Had Yai Airport</span>
          <span class="font-semibold text-violet-500 mt-1">
            {{ Date.toLocaleString() }}
          </span>
        </div>
        <div class="flex flex-col">
          <span class="font-semibold">Total Time</span>
          <span
            >{{ 7200000 / 3600000}} Hours</span
          >
        </div>
        <div class="flex flex-col">
          <span class="font-semibold">Price</span>
          <span class="text-xl font-bold"
            >{{Number(2000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} Baht</span
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
import { defineComponent } from 'vue';
import LayoutComponent from '@/components/Layout/LayoutComponent.vue';
import BannerComponent from '@/components/Home/BannerComponent.vue';
import SearchBoxComponent from '@/components/Home/SearchBoxComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    LayoutComponent,
    BannerComponent,
    SearchBoxComponent
},
});
</script>
