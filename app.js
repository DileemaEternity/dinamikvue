Vue.createApp({
    // data() {
    //     return {

    //     }
    // }
    data: () => ({
        myHtml: '<h1>Vue3 app</h1>',
        title: 'Я есть Грут',
        person: {
            firstName: 'Dima',
            lastName: 'Li',
            age: 27
        },
        items: [1, 2, 3, 4, 5, 6]
    })
}).mount('#app') 