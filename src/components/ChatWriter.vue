<template>
    <div id="chat-writer">
        <v-text-field
            solo
            full-width
            label="Type your message ..."
            append-icon="send"
            v-model="message"
            @click:append="submit"
        ></v-text-field>

    </div>
</template>

<script>
import API from '../api';

export default {
    name: 'ChatWriter',
    data() {
        return {
            message: ''
        }
    },
    methods: {
        submit() {
            API.postMessages(this.encodedMessage);
        }
    },
    computed: {
        encodedMessage() {
            return encodeURI(this.message);
        }
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
