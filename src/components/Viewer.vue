<template>
    <div class="viewer">
        <div class="ma-3 viewer__listItem" v-for="(message) in messages" :key="message.timestamp">
            <p class="ma-0 mb-1 viewer__listItemName">{{message.name}}</p>
            <div class="pa-3 viewer__listItemContent">
                {{message.content}}
            </div>
        </div>
    </div>
</template>

<script>
import { Client, Message } from '@stomp/stompjs';

export default {
    name: 'Viewer',
    data() {
        return {
            messages: [],
            stomp: new Client({
                brokerURL: 'ws://localhost:8080/chat',
                onConnect: () =>  this.stomp.subscribe('/channel/public', (message) => { this.messages.push(JSON.parse(message.body)) })
            })
        }
    },
    updated() {
        this.$el.scrollTop = this.$el.scrollHeight;
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
.viewer {
    background-color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 2px;
    margin-bottom: 20px;
    padding: 20px;
    overflow: auto;
    height: calc(100% - 76px);


    .viewer__listItem {
        color: #564146;
        background-color: initial;

        .viewer__listItemName {
            color: #8e8a80;
        }

        .viewer__listItemContent {
            display: inline-block;
            border: 1px solid #FFE3EE;
            background-color: #FFE3EE;
            border-radius: 5px;
        }
    }
}
</style>
