<template>
    <div id="chat-room-writer">
        <v-text-field
            solo
            full-width
            label="Type your message ..."
            append-outer-icon="place"
            @click:append="submit"
        ></v-text-field>

    </div>
</template>

<script>
import API from '../api';


export default {
    name: 'ChatRoomWriter',
    methods: {
        submit() {
            console.log('ok');
        }
    }
}
</script>

<style>

</style>
