import { defineComponent } from 'vue';
import { useCounter } from '../composables/useCounter';

export default defineComponent({
  props: {
    value: { type: Number, required: true }
  },
  setup( props ) {
    // const counter = ref( props.value ?? 10);
    // const squareCounter = computed(() => counter.value * counter.value);
    const { counter, squareCounter } = useCounter( props.value )
    // console.log( props , 44)
    return {
      counter,
      squareCounter,
    }
  },


})