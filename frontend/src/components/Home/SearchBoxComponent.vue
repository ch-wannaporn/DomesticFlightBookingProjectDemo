<template>
  <div class="flex w-2/3">
    <div class="-mt-12 flex w-full justify-between items-center">
      <div
        class="flex w-1/4 rounded-l-md shadow-md bg-rose-300 justify-end pr-4 h-full"
      >
        <div class="border-r-4 border-white border-dashed"></div>
      </div>
      <form
        class="grid grid-flows-row grid-cols-3 gap-x-4 gap-y-2 w-3/4 rounded-r-md shadow-md bg-violet-500 px-8 py-4"
      >
        <div class="flex flex-col">
          <label class="text-white font-semibold">From</label>
          <select
            class="rounded-md px-2 py-1 focus:outline-none h-8"
            v-model="searchValues.from"
          >
            <option v-for="city in cities" :key="city._id" :value="city._id">
              {{ city.name }}
            </option>
          </select>
        </div>
        <div class="flex flex-col">
          <label class="text-white font-semibold">To</label>
          <select
            class="rounded-md px-2 py-1 focus:outline-none h-8"
            v-model="searchValues.to"
          >
            <option v-for="city in cities" :key="city._id" :value="city._id">
              {{ city.name }}
            </option>
          </select>
        </div>
        <div class="flex flex-col">
          <label class="text-white font-semibold">Date</label>
          <input
            type="date"
            class="rounded-md px-2 py-1 focus:outline-none h-8"
            v-model="searchValues.date"
          />
        </div>
        <div class="flex flex-col">
          <label class="text-white font-semibold">Passengers</label>
          <input
            type="number"
            class="rounded-md px-2 py-1 focus:outline-none h-8"
            min="1"
            v-model="searchValues.passengers"
          />
        </div>
        <div class="flex flex-col">
          <label class="text-white font-semibold">Price</label>
          <select
            class="rounded-md px-2 py-1 focus:outline-none h-8"
            v-model="searchValues.price"
          >
            <option value="<1000">Less than 1,000 Baht</option>
            <option value="1000-2000">1,000 - 2,000 Baht</option>
            <option value=">2000">More than 2,000 Baht</option>
          </select>
        </div>
        <div class="flex w-full items-end">
          <button
            type="button"
            class="flex justify-center items-center space-x-1 w-full rounded-md px-2 py-1 focus:outline-none h-8 bg-rose-300 hover:bg-rose-400 text-white font-semibold"
            @click="search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="h-4 w-4"
              fill="currentColor"
            >
              <path
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
              />
            </svg>
            <span>Search</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Search } from "@/classes/index";
import { getAllFlights } from "@/store/actions";
import { useStore } from "vuex";

export default defineComponent({
  name: "SearchBoxComponent",
  props: ["cities"],
  setup: () => {
    const store = useStore();
    const searchValues = ref(store.getters.searchValues);

    const search = () => {
      getAllFlights(store, searchValues.value);
    };

    return { searchValues, search };
  },
});
</script>
