<template>
  <LayoutComponent>
    <BannerComponent/>
    <SearchBoxComponent/>
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
