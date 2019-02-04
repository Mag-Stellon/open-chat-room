<template>
  <div id="app">
    <ChatRoomViewer/>
    <ChatRoomWriter/>
  </div>
</template>

<script>
import ChatRoomViewer from './components/ChatRoomViewer.vue'
import ChatRoomWriter from './components/ChatRoomWriter.vue'

export default {
  name: 'app',
  components: {
    ChatRoomViewer,
    ChatRoomWriter
  }
}
</script>

<style>
body {
  font-family: 'Roboto', serif;
  color: #fff;
  background-image: radial-gradient(circle, #a03759, #9d3657, #9a3455, #983354, #953252, #913150, #8e2f4e, #8a2e4c, #842c49, #7e2a45, #792942, #73273f);
}

html {
  min-height: 100%;
  min-width: 320px;
}

#app { 
  margin: 20px;
}
</style>
