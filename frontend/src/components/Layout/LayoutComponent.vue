<template>
    <div class="flex flex-col items-center bg-rose-50">
        <HeaderComponent/>
            <slot/>
        <FooterComponent/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';

export default defineComponent({
    name: 'LayoutComponent',
    components: { HeaderComponent, FooterComponent }
})
</script>