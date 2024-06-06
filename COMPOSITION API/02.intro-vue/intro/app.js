
const { createApp, ref } = Vue;


const app = createApp({
    // template: `
    //     <h1>{{message}}</h1>
    //     <p>{{author}}</p>
    // `,
    setup() {

        const message = ref('I´m Batman');
        const author = ref('Bruce Wayne');


        const changeQuote = () => {
            message.value = 'Hola Soy Goku '
            author.value = 'Soy Goku 2'
        }
        
        
        // setTimeout(() => {
        //     message.value = 'Soy Goku'
        //     author.value = 'Soy Goku 2'
        // }, 1000)
        
        return {
            message,
            author,
            changeQuote
        }
    }
});

app.mount('#myApp')