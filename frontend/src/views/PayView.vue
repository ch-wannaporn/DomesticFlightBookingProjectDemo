<template>
  <LayoutComponent>
    <div class="flex w-full justify-center items-center">
      <form
        class="flex flex-col mt-16 p-8 gap-4 bg-white rounded-md shadow-md justify-center"
      >
        <span class="font-semibold text-lg text-violet-500 text-center"
          >Payment Information</span
        >
        <div class="flex flex-col">
          <label class="font-semibold text-sm">Name</label>
          <input
            class="border border-violet-500 px-2 py-1 rounded-md focus:outline-none focus:bg-gray-50"
            placeholder="JOHN DOE"
            :value="payment.name"
            @input="payment.name = ($event.target as HTMLInputElement).value"
          />
        </div>
        <div class="flex flex-col">
          <label class="font-semibold text-sm">Card No.</label>
          <input
            class="border border-violet-500 px-2 py-1 rounded-md focus:outline-none focus:bg-gray-50"
            placeholder="4242424242424242"
            :value="payment.card"
            @input="payment.card = ($event.target as HTMLInputElement).value"
          />
        </div>
        <div class="flex flex-col">
          <label class="font-semibold text-sm">CVV</label>
          <input
            class="border border-violet-500 px-2 py-1 rounded-md focus:outline-none focus:bg-gray-50"
            placeholder="123"
            :value="payment.code"
            @input="payment.code = ($event.target as HTMLInputElement).value"
          />
        </div>
        <div class="flex flex-col">
          <label class="font-semibold text-sm">Expiration</label>
          <div class="flex items-center gap-x-2">
            <input
              class="border border-violet-500 px-2 py-1 rounded-md focus:outline-none focus:bg-gray-50"
              placeholder="MM"
              :value="payment.month"
              @input="
                payment.month = Number(
                  ($event.target as HTMLInputElement).value
                )
              "
            />
            <span>/</span>
            <input
              class="border border-violet-500 px-2 py-1 rounded-md focus:outline-none focus:bg-gray-50"
              placeholder="YYYY"
              :value="payment.year"
              @input="
                payment.year = Number(($event.target as HTMLInputElement).value)
              "
            />
          </div>
        </div>
        <button
          type="button"
          class="font-semibold text-white mt-4 px-4 py-2 w-full rounded-md bg-violet-500 hover:bg-violet-600"
          @click="pay"
        >
          Confirm
        </button>
      </form>
    </div>
  </LayoutComponent>
</template>

<script lang="ts">
import LayoutComponent from "@/components/Layout/LayoutComponent.vue";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { createPayment } from "@/store/actions";
import { Payment } from "@/classes";

export default defineComponent({
  name: "PayView",
  components: { LayoutComponent },
  setup: () => {
    const store = useStore();
    const payment = ref(new Payment());

    const pay = () => {
      createPayment(store, {
        ...payment.value,
        price: store.getters.booking.price,
      });
    };

    return {
      payment,
      pay,
    };
  },
});
</script>
