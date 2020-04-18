<template>
  <div class="weather">
    <iframe frameborder="0"
            src="https://widget-page.heweather.net/h5/index.html?bg=1&md=03&lc=accu&key=6dabc44d89db43dd82b4ce21fbb70a97">
    </iframe>
  </div>
</template>

<script>
  export default {
    name: "Weather"
  };
</script>

<style scoped>
  iframe {
    width: 100vw;
    height: calc(100vh - 49px);
  }
</style>
