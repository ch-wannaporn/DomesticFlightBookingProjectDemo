<template>
  <div class="flex flex-col items-center bg-rose-50">
    <HeaderComponent/>
    <BannerComponent/>
    <SearchBoxComponent/>
    <FooterComponent/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import BannerComponent from '@/components/BannerComponent.vue';
import SearchBoxComponent from '@/components/SearchBoxComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    SearchBoxComponent
},
});
</script>
