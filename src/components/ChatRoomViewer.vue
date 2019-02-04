<template>
    <div id="chat-room-viewer">
        <p v-for="message in messages" :key="message.id">
            {{message.content}}
        </p>
    </div>
</template>

<script>
import API from '../api';

export default {
    name: 'ChatRoomViewer',
    data() {
        return {
            messages: []
        }
    },
    created() {
        var that = this;
        API.getMessages()
        .then(response => {
            that.messages = response.data;
        });
    }
}
</script>

<style lang="scss">
#chat-room-viewer {
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 2px;
    margin-bottom: 20px;
    padding: 20px;
}
</style>
