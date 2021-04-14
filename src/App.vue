<template>
  <h1 class="text-green-300 text-7xl">
    Headless UI
  </h1>
  <Overlay />
</template>

<script>
import Overlay from "./components/Overlay.vue"

export default {
  name: "App",
  components: { Overlay },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
