<template>
  <nav class="main-nav navbar is-primary">
    <div class="container">
      <div class="navbar-start ">
        <nuxt-link class="navbar-item" to="/">
          <h1 class="title is-5">
            Old World XML Viewer
          </h1>
        </nuxt-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            General
          </a>
          <div class="navbar-dropdown is-boxed">
            <GeneralNavigation />
          </div>
        </div>
      </div>
      <span class="navbar-toggle">
        <span />
        <span />
        <span />
      </span>
      <div class="navbar-end navbar-menu">
        <a href="https://github.com/kmatsui058/oldworld-xml-viewer/stargazers" class="navbar-item" rel="noopener noreferrer">
          <img src="https://img.shields.io/github/stars/kmatsui058/oldworld-xml-viewer.svg" alt="GitHub stars">
        </a>
        <a class="navbar-item" href="//github.com/kmatsui058/oldworld-xml-viewer/issues" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fa', 'bug']" />&nbsp;Report an issue
        </a>
        <a class="navbar-item" href="//github.com/kmatsui058/oldworld-xml-viewer" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a class="navbar-item" href="//twitter.com/km058Okoha" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
      </div>
    </div>
  </nav>
</template>
<script lang="ts" setup>
import GeneralNavigation from '~/components/navigation/GeneralNavigation.vue'
</script>
