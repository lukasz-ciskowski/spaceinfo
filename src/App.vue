<script setup lang="ts">
import { RouterView } from 'vue-router';
import MainNavigation from './components/MainNavigation/MainNavigation.vue';
import { useQueryProvider } from 'vue-query';
import options from '@/config/particles.json';
import type { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { tsParticles } from 'tsparticles-engine';

useQueryProvider({ defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } } });

const initParticles = async function particlesInit(engine: Engine): Promise<void> {
  await loadFull(engine);
  await engine.load('particles', options as any);
};
initParticles(tsParticles);
</script>

<template>
  <div id="particles" />

  <header class="sticky-top">
    <MainNavigation />
  </header>

  <div class="px-md-5 pt-4 mb-5">
    <RouterView />
  </div>
</template>
