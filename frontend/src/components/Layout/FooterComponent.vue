<template>
  <nav
    class="mt-16 flex w-full h-8 justify-center items-center bg-violet-600 text-white"
  >
    <div class="flex w-2/3 justify-between items-baseline font-semibold">
      <span
        >© Copyright {{ new Date().getFullYear() }} Wannaporn Chokvisavapornkul
        Company
      </span>
      <span>Tel: 061-896-3188</span>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterComponent",
});
</script>
