<template>
    <div id="chat-viewer">
        <v-list class="list">
            <template v-for="(message) in messages">
                <v-list-tile
                    :key="message.id"
                    avatar
                >
                    <v-list-tile-avatar>
                        <img :src="message.avatar">
                    </v-list-tile-avatar>

                    <v-list-tile-content class="list-content">
                        <v-list-tile-title v-html="message.id"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="decodeMessage(message.content)"></v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
            </template>
        </v-list>
    </div>
</template>

<script>
import API from '../api';

export default {
    name: 'ChatViewer',
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
    },
    methods: {
        decodeMessage(message){
            return decodeURI(message);
        }
    }
}
</script>

<style lang="scss">
#chat-viewer {
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 2px;
    margin-bottom: 20px;
    padding: 20px;

    .list {
        background-color: initial;
    }
}
</style>
