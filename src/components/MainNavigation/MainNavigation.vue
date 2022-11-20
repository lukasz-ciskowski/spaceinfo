<script setup lang="ts">
import { NAV } from './nav';
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-lg px-4">
      <img src="@/assets/icons/logo.png" alt="logo" />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li v-for="navItem in NAV">
            <RouterLink class="nav-link" active-class="active" :to="navItem.path">{{ navItem.title }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>