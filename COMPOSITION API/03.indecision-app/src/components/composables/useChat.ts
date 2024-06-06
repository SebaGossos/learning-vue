import { sleep } from '@/helpers/sleep';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import type { YesNoResponse } from '@/interfaces/yes-no.response';
import { ref } from 'vue';

export const useChat = () => {
  const getHerResponse = async () => {
    const resp = await fetch('https://yesno.wtf/api');
    const data = (await resp.json()) as YesNoResponse;

    return data;
  };

  const messages = ref<ChatMessage[]>([]);

  const onMessage = async(text: string) => {
    if (text.length === 0) return;
    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    });

    // Evaular si termina con un ?
    if (!text.endsWith('?')) return;

    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: '...',
    })

    await sleep( 500 )
    messages.value.pop()

    const { answer, image } = await getHerResponse();
    
    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image: image,
    })
    
  };

  return {
    // Properties,
    messages,

    // Methods
    onMessage,
  };
};
