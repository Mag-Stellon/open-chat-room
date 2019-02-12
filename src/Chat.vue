<template>
  <div id="chat">
    <Viewer/>
    <Writer/>
  </div>
</template>

<script>
import Viewer from './components/Viewer.vue'
import Writer from './components/Writer.vue'

export default {
  name: 'app',
  components: {
    Viewer,
    Writer
  }
}
</script>

<style>
body {
  height: 100%;
  font-family: 'Roboto', serif;
  color: #fff;
  background-image: radial-gradient(circle, #a03759, #9d3657, #9a3455, #983354, #953252, #913150, #8e2f4e, #8a2e4c, #842c49, #7e2a45, #792942, #73273f);
}

html {
  height: 100%;
  min-width: 320px;
}

#chat { 
  height: 100%;
  padding: 20px;
}

@media screen and (min-width: 736px) {
  #chat {
    padding: 20px 20%;
  }
}

</style>
