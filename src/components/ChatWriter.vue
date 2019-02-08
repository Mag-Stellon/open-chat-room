<template>
    <div id="chat-writer">
        <v-text-field
            solo
            full-width
            label="Type your message ..."
            append-icon="send"
            v-model="message"
            @click:append="send"
        ></v-text-field>

    </div>
</template>

<script>
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";

export default {
    name: 'ChatWriter',
    data() {
        return {
            message: '',
            socket: null,
            connected: false
        }
    },
    methods: {
        send() {
            if (this.socket && this.socket.connected) {
                const msg = { content: this.message };
                this.socket.send("/app/messages", JSON.stringify(msg), {});
            }
        },
        connect() {
            this.socket = Stomp.over(new SockJS("http://localhost:8080/gs-guide-websocket"), {protocols: 'v12.stomp', debug: true});
            this.socket.connect(
                {},
                frame => {
                    this.connected = true;
                },
                error => {
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
#chat-writer {
    .v-icon {
        color: #a03759;
    }
}
</style>
