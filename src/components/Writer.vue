<template>
    <div class="writer">
        <v-text-field
            solo
            single-line
            label="Message"
            append-icon="send"
            v-model="message"
            @click:append="send"
            v-on:keyup.enter="send"
        ></v-text-field>
    </div>
</template>

<script>
import { Client, Message } from '@stomp/stompjs';

export default {
    name: 'Writer',
    data() {
        return {
            message: '',
            stomp: new Client({
                brokerURL: process.env.VUE_APP_BROKER_URL
            })
        }
    },
    methods: {
        send() {
            this.stomp.publish({destination: process.env.VUE_APP_SEND, body: this.serializeMessage()});
            this.message = '';
        },
        serializeMessage(){
            return JSON.stringify({
                content: this.message
            });
        }
    },
    beforeMount() {
        this.stomp.activate();
    },
    beforeDestroy() {
        this.stomp.deactivate();
    }
}
</script>

<style lang="scss">
.writer {
    .v-icon {
        color: #a03759;
    }
}
</style>
