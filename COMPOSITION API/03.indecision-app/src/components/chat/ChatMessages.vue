<template>
  <div ref="ChatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble 
      v-for="message in messages"
      :key="message.id"
      v-bind="message"
      />
      <!-- :its-mine="message.itsMine" 
      :message="message.message" 
      :image="message.image" -->
      <!-- <ChatBubble :its-mine="false" image="https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif" :message="'si'" /> -->

    </div>
  </div>
</template>

<script setup lang="ts">

import type { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';
import { ref, watch } from 'vue';

interface Props {
  messages: ChatMessage[];
}

const { messages } = defineProps<Props>();

const ChatRef = ref<HTMLDivElement|null>(null);

watch( messages, () => {
  setTimeout(() => {
    ChatRef.value?.scrollTo({
      top: ChatRef.value.scrollHeight,
      behavior: 'smooth'
    })
  }, 100);
})


</script>
