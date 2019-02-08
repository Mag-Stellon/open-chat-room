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
                        <v-list-tile-sub-title v-html="message.content"></v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
            </template>
        </v-list>
    </div>
</template>

<script>
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";

export default {
    name: 'ChatViewer',
    data() {
        return {
            socket: null,
            messages: [],
            connected: false
        }
    },
    methods: {
        connect() {
            this.socket = Stomp.over( new SockJS("http://localhost:8080/gs-guide-websocket"), {protocols: 'v12.stomp', debug: true});
            this.socket.connect(
                {},
                frame => {
                    this.connected = true;
                    console.log(frame);
                    this.socket.subscribe("/topic/messages", tick => {
                        this.messages.push(JSON.parse(tick.body));
                    });
                },
                error => {
                    console.log(error);
                    this.connected = false;
                }
            );
        },
        disconnect() {
            if (this.socket) {
                this.stompClient.disconnect();
            }
            this.connected = false;
        },
        tickleConnection() {
            this.connected ? this.disconnect() : this.connect();
        }
    },
    mounted() {
        this.connect();
    }
}
</script>

<style lang="scss">
#chat-viewer {
    background-color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 2px;
    margin-bottom: 20px;
    padding: 20px;

    .list {
        background-color: initial;
    }
}
</style>
